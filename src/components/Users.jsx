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
        const response = await fetch(import.meta.env.VITE_GETLEADERBOARD, {
          headers: { Authorization: "Bearer " + token },
        });
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
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "player_name",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      type: "number",
    },
    {
      field: "total_score",
      headerName: "Score",
      flex: 1,
      type: "number",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      flex: 1,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div className="flex w-full h-screen">
      <div className="p-2 w-full">
        <DataGrid
          getRowId={(row) => row.player_name}
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
