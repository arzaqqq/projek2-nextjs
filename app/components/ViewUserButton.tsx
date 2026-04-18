"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> =  ({userId}) => {
 
  const handleClick = () => {
    // Logika untuk melihat detail pengguna
    alert(`User id :  ${userId}`);
  }
  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">  Lihat detail  </button>
  );
}

export default ViewUserButton;