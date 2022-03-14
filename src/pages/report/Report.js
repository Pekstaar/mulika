import React, { useContext, useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { GiPauseButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { Context } from "../../utils/MainContext";
import ReactPlayer from "react-player/file";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../utils/Firebase";
import { Loader } from "../../components/Loader";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Layout } from "../../components/layouts/Layout";

export const Report = () => {
  const { vBlob } = useContext(Context);
  const [videoURL, setVideoUrl] = useState();
  const [play, setPlay] = useState(false);
  const navigate = useNavigate();
  const [GeoLocation, setGeoLocation] = useState(
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeoLocation(position);
    })
  );
  const [loading, setLoading] = useState(false);

  // incident state: description, plate
  const [incident, setIncident] = useState({
    plate: "",
    description: "",
  });

  const handleEnded = () => {
    setPlay(false);
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncident({
      ...incident,
      [name]: value,
    });
  };

  const makeEmpty = () => {
    setIncident({
      plate: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // initialize incident details
    const incidentDetails = {
      plate: incident.plate,
      description: incident.description,
      location: {
        lat: GeoLocation.coords && GeoLocation.coords.latitude,
        long: GeoLocation.coords && GeoLocation.coords.longitude,
      },
    };

    // upload video
    const imageRef = ref(
      storage,
      `incidents/ ${new Date().getTime()}_${incident.plate}`
    );

    // store incident details
    try {
      await uploadBytes(imageRef, vBlob).then(async (r) => {
        const fullPath = r.ref.fullPath;
        const url = await getDownloadURL(ref(storage, fullPath));

        console.log(fullPath, url);
        await addDoc(collection(db, "reported_incidents"), {
          ...incidentDetails,
          videoUrl: url,
          videoPath: fullPath,
        });

        swal("Added!", "Report Added Successfully!");

        setLoading(false);

        makeEmpty();
      });
    } catch (error) {
      swal("Error!", error.message, "error");

      setLoading(false);
    }
  };

  useEffect(() => {
    if (vBlob) {
      const videoUrl = window.URL.createObjectURL(vBlob);
      setVideoUrl(videoUrl);
    }
  }, [vBlob]);

  // useEffect(() => {

  // }, []);

  return (
    <Layout current="Home">
      {loading && <Loader loading={loading} message="Saving Report . . ." />}
      <div>
        {/* header */}
        <div className="flex justify-around items-center h-14 ">
          <button onClick={navigateBack} className="text-2xl">
            <IoArrowBackSharp />
          </button>

          <span className="text-2xl font-bold">Report</span>

          <div className="" />
        </div>

        {/* body */}
        <form
          onSubmit={handleSubmit}
          className="px-4 pb-20 flex flex-col gap-2"
        >
          {/* image */}
          <div
            className="relative"
            style={{ height: "350px" }}
            onClick={togglePlay}
          >
            {videoURL ? (
              <ReactPlayer
                url={videoURL}
                playing={play}
                width="100%"
                height="100%"
                onEnded={handleEnded}
                style={{ objectFit: "cover !important" }}
              />
            ) : (
              <div className="bg-gray-400 w-full h-full object-cover"></div>
            )}
            {play ? (
              <div
                onClick={() => setPlay(!play)}
                className="absolute text-5xl opacity-10 text-white hover:opacity-100  cursor-pointer"
                style={{ left: "43%", top: "45%" }}
              >
                <GiPauseButton />
              </div>
            ) : (
              <div
                onClick={() => setPlay(!play)}
                style={{ left: "43%", top: "45%" }}
                className="absolute text-4xl text-white cursor-pointer"
              >
                <FaPlay />
              </div>
            )}
          </div>

          <div>
            <label className="font-bold" htmlFor="">
              Number plate:
            </label>
            <input
              className="bg-slate-200 w-full rounded-lg p-3"
              type="text"
              placeholder="Enter offender's Number plate"
              name="plate"
              value={incident.plate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-bold" htmlFor="phone">
              Incident Description:
            </label>
            <textarea
              name="description"
              value={incident.description}
              onChange={handleChange}
              className="bg-slate-200 w-full rounded-lg p-3"
              type="text"
              rows={3}
              placeholder="give a brief description of the incident"
            />
          </div>

          <button
            type="submit"
            className="gradient p-3 w-3/4 mx-auto text-white font-bold text-2xl rounded-3xl"
          >
            Share
          </button>
        </form>
      </div>
    </Layout>
  );
};
