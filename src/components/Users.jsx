import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API + "/getLeaderboard",
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "id_player", headerName: "Game ID", flex: 1 },
    {
      field: "player_name",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "id_user",
      headerName: "Aulify ID",
      flex: 1,
      type: "number",
    },
    {
      field: "total_score",
      headerName: "Score",
      flex: 1,
      type: "number",
    },
  ];

  return (
    <div className="flex w-full h-screen">
      <div className="p-2 w-full">
        <DataGrid
          getRowId={(row) => row.id_player}
          rows={users}
          columns={columns}
          disableRowSelectionOnClick
          className="bg-aulify-light-blue/10"
          sx={{
            color: "white",
            borderColor: "transparent",
            "& .MuiDataGrid-cell": {
              border: 1,
              borderRight: 0,
              borderTop: 0,
              borderColor: "transparent",
            },
            "& .MuiToolbar-root": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Users;
