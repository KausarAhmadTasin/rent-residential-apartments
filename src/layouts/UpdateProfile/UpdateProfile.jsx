import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider/AuthContext";

const UpdateProfile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const handleSave = () => {
    updateProfileInfo(name, photoURL)
      .then(() => {
        alert("Edited successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto">
        <Helmet>
          <title>SH - Profile</title>
        </Helmet>
        <div>
          <div className="card mx-2 h-screen md:h-auto md:w-2/3 bg-[#285274] text-white shadow-xl md:mx-auto">
            {user.photoURL && (
              <figure className="px-10 pt-10">
                <img
                  src={user?.photoURL}
                  alt={user.photoURL}
                  className="rounded-xl"
                />
              </figure>
            )}
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.displayName}</h2>
              <p>{user.email}</p>
              <div className="card-actions">
                <a
                  href="#my_modal_8"
                  className="btn my-4 bg-[#EC6325] rounded-2xl text-white  border-none"
                >
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
          Modal
      */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <h1 className="text-center font-semibold text-2xl my-4">
            Edit profile information!
          </h1>

          <div className="text-end">
            <label className="font-semibold text-lg" htmlFor="name">
              Name:
            </label>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-4 py-2 rounded-lg my-4 w-4/5 ml-1"
            />
            <br />
            <label className="font-semibold text-lg" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              value={user.email}
              className="border px-4 py-2 rounded-lg  w-4/5 ml-1"
            />
            <p className="text-red-600">You cannot change email address.*</p>
            <br />
            <label className="font-semibold text-lg" htmlFor="photoURL">
              PhotoURL:
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="border px-4 py-2 rounded-lg mb-2 w-4/5 ml-1"
            />
          </div>

          <div className="modal-action">
            <button
              onClick={handleSave}
              className="btn my-4 bg-[#7AA93C] rounded-2xl text-white border-none"
            >
              Save
            </button>
            <a
              href="#"
              className="btn my-4 bg-[#EC6325] rounded-2xl text-white border-none"
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
