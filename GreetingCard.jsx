const GreetingCard = ({ title, message }) => {
    return (
      <div className="border-2 border-gray-300 p-4 rounded-lg shadow-lg max-w-sm mx-auto my-4 bg-white">
        <h2 className="text-xl font-bold text-blue-600">{title}</h2>
        <p className="text-gray-700 mt-2">{message}</p>
      </div>
    );
  };
  
  export default GreetingCard;
  