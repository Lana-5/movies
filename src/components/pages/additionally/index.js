import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import jsonplaceholderAPI from "api/jsonplaceholderAPI";
import "./additionally.scss";

const Additionally = () => {
  const [requestSelect, setRequestSelect] = useState(""); // хранится выбранный запрос

  const [TextFieldBody, setTextFieldBody] = useState("");
  const [TextFieldTitle, setTextFieldTitle] = useState("");

  const [errorMessenger, setErrorMessenger] = useState(false);
  const [successMessenger, setSuccessMessenger] = useState(false);

  const textFieldBodyСhange = (e) => {
    setTextFieldBody(e.target.value);
  }; // сохранение введенного значения в стейт

  const textFieldTitleСhange = (e) => {
    setTextFieldTitle(e.target.value);
  }; // сохранение введенного значения в стейт

  const сhangeRequest = (e) => {
    setRequestSelect(e.target.value);
  };

  const clickButtonSend = async () => {
    try {
      let res;
      if (requestSelect === 1) {
        res = await jsonplaceholderAPI("posts/1");
      } else if (requestSelect === 2) {
        res = await jsonplaceholderAPI.post("posts", {
          body: {
            title: { TextFieldTitle },
            body: { TextFieldBody },
          },
        });
      } else if (requestSelect === 3) {
        res = await jsonplaceholderAPI.put("posts/1", {
          body: {
            id: 1,
            title: { TextFieldTitle },
            body: { TextFieldBody },
          },
        });
      } else if (requestSelect === 4) {
        res = await jsonplaceholderAPI.patch("posts/1", {
          body: {
            title: { TextFieldTitle },
          },
        });
      } else if (requestSelect === 5) {
        res = await jsonplaceholderAPI.delete("posts/1");
      }
      console.log(res);
      setSuccessMessenger(true);
    } catch (e) {
      setErrorMessenger(true);
    }
  }; // выполняется функция при нажатии на кнопку отправить ( в зависимости от выбранного запроса, выбранный запрос выполняется )

  return (
    <Grid
      container
      className="additionally"
      alignItems="center"
      flexDirection="column"
    >
      <Grid
        container
        item
        xs={10}
        sm={8}
        md={6}
        lg={6}
        justifyContent="space-around"
      >
        <div className="additionally_title">
          <TextField
            label="Title"
            variant="outlined"
            value={TextFieldTitle}
            onChange={textFieldTitleСhange}
          />
        </div>
        <div className="additionally_body">
          <TextField
            label="Body"
            variant="outlined"
            value={TextFieldBody}
            onChange={textFieldBodyСhange}
          />
        </div>
      </Grid>
      <Grid container item xs={10} sm={8} md={6} lg={6}>
        <FormControl fullWidth>
          <InputLabel>Выберите запрос</InputLabel>
          <Select
            value={requestSelect}
            onChange={сhangeRequest}
            label="Выберите запрос"
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
          <Alert severity="success" sx={{ width: "100%" }}>
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
          <Alert severity="error" sx={{ width: "100%" }}>
            Не успешно!
          </Alert>
        </Snackbar>
        <div className="additionally_button">
          <Button
            variant="contained"
            onClick={() => {
              clickButtonSend();
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
