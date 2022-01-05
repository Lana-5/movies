import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import "./additionally.scss";

const Additionally = () => {
  const [request, setRequest] = useState(""); // хранится выбранный запрос
  const [serverResponse, setServerResponse] = useState(""); // хранится ответ сервера

  const [additionallyBody, setAdditionallyBody] = useState(""); // хранится то, что введено в body
  const [additionallyTitle, setadditionallyTitle] = useState(""); // хранится то, что введено в title

  const [errorMessenger, setErrorMessenger] = useState(false);
  const [successMessenger, setSuccessMessenger] = useState(false);

  const onLabelChangeBody = (e) => {
    setAdditionallyBody(e.target.value);
  };

  const onLabelChangeTitle = (e) => {
    setadditionallyTitle(e.target.value);
  };

  const onLabelChangeRequest = (e) => {
    setRequest(e.target.value);
  };

  const onLaberChangeButton = () => {
    if (request === 1) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          const listResponse = res?.data || [];
          setServerResponse(listResponse);
          console.log(listResponse); // Ответ какой он приходит с сервиса

          console.log("Успешно");
          setSuccessMessenger(true);
        })
        .catch((res) => {
          console.log("Не успешно");
          setErrorMessenger(true);
        });
    } else if (request === 2) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: { additionallyTitle },
            body: { additionallyBody },
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => {
          const listResponse = res?.data || [];
          setServerResponse(listResponse);
          console.log(listResponse);
          console.log("Успешно");
          setSuccessMessenger(true);
        })
        .catch((res) => {
          console.log("Не успешно");
          setErrorMessenger(true);
        });
    } else if (request === 3) {
      axios
        .put("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PUT",
          body: JSON.stringify({
            id: 1,
            title: { additionallyTitle },
            body: { additionallyBody },
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => {
          const listResponse = res?.data || [];
          setServerResponse(listResponse);
          console.log(listResponse);
          console.log("Успешно");
          setSuccessMessenger(true);
        })
        .catch((res) => {
          console.log("Не успешно");
          setErrorMessenger(true);
        });
    } else if (request === 4) {
      axios
        .patch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PATCH",
          body: JSON.stringify({
            title: { additionallyTitle },
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => {
          const listResponse = res?.data || [];
          setServerResponse(listResponse);
          console.log(listResponse);
          console.log("Успешно");
          setSuccessMessenger(true);
        })
        .catch((res) => {
          console.log("Не успешно");
          setErrorMessenger(true);
        });
    } else if (request === 5) {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/1", {
          method: "DELETE",
        })
        .then((res) => {
          const listResponse = res || [];
          setServerResponse(listResponse);
          console.log(listResponse);
          console.log("Успешно");
          setSuccessMessenger(true);
        })
        .catch((res) => {
          console.log("Не успешно");
          setErrorMessenger(true);
        });
    }
  };

  return (
    <Grid
      className="additionally"
      display="flex"
      justifyContent="center"
      container
    >
      <Grid
        className=""
        container
        item
        width="70%"
        display="flex"
        justifyContent="center"
      >
        <div className="additionally_title">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={additionallyTitle}
            onChange={onLabelChangeTitle}
          />
        </div>
        <div className="additionally_body">
          <TextField
            id="outlined-basic"
            label="Body"
            variant="outlined"
            value={additionallyBody}
            onChange={onLabelChangeBody}
          />
        </div>
      </Grid>
      <Grid className="" container item width="70%">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {" "}
            Выберите запрос{" "}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={request}
            onChange={onLabelChangeRequest}
          >
            <MenuItem value={1}>GET</MenuItem>
            <MenuItem value={2}>POST</MenuItem>
            <MenuItem value={3}>PUT </MenuItem>
            <MenuItem value={4}>PATCH </MenuItem>
            <MenuItem value={5}> DELETE </MenuItem>
          </Select>
        </FormControl>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={successMessenger}
          autoHideDuration={1500}
          onClose={() => {
            setSuccessMessenger(false);
          }}
        >
          <Alert onClose={() => {}} severity="success" sx={{ width: "100%" }}>
            Успешно!
          </Alert>
        </Snackbar>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={errorMessenger}
          autoHideDuration={1500}
          onClose={() => {
            setErrorMessenger(false);
          }}
        >
          <Alert onClose={() => {}} severity="error" sx={{ width: "100%" }}>
            Не успешно!
          </Alert>
        </Snackbar>
        <div className="additionally_button">
          <Button
            variant="contained"
            onClick={() => {
              onLaberChangeButton();
            }}
          >
            Отправить
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Additionally;
