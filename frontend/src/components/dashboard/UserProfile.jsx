const UserProfile = ({profile}) => {

  return (
    <>
       <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          src={profile.profilePicture || "/default-avatar.png"}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-pink-600"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-600">@{profile.username}</p>
          <p className="text-sm text-gray-500">{profile.location}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Bio</h2>
        <p className="mt-2 text-gray-600">{profile.bio}</p>
      </div>

      {/* Skills & Tools */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Skills & Tools</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {profile.skills?.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Socials */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Socials</h2>
        <div className="flex space-x-4 mt-2">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {profile.portfolio && (
            <a
              href={profile.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:underline"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default UserProfile;