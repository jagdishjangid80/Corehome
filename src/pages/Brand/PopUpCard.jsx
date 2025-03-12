import React from "react";

const PopUpCard = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="relative bg-white w-full h-full flex flex-col justify-center items-center text-center p-6 overflow-y-auto"
        style={{
          backgroundImage: data.background ? `url(${data.background})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={data.logo || "default-logo.png"}
          alt="Brand Logo"
          className="w-20 h-20 mb-4"
        />

        <p className="text-gray-900 mb-4 px-4 text-lg w-5xl font-bold">
          {data.description || "No Description Available"}
        </p>

        {data.website && (
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-900 font-semibold py-2 px-4 mb-4 hover:underline"
          >
            {data.visitText || "Visit Website"}
          </a>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-5 overflow-x-auto">
          {data.images && data.images.length > 0 ? (
            data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                className="lg:w-[324px] lg:h-[324px] md:w-[124px] md:h-[124px] object-cover rounded-md"
              />
            ))
          ) : (
            <p className="text-gray-500">No Images</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 left-4 px-4 py-2 bg-gray-300 text-black rounded-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PopUpCard;
