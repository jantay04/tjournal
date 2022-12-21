import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from "./AuthDialog.module.scss";
import MainForm from "./forms/Main";
import Login from "./forms/Login";
import Register from "./forms/Register";

interface AuthDialog {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialog> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">("main");

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <DialogContentText>
          <div>
            <Typography>{formType == 'main' ? 'Вход в TJournam' :
              <div onClick={() => setFormType('main')} className='cursor-pointer '><ArrowBackIosIcon />К авторизации</div>}</Typography>
            {formType == "main" && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType == "login" && <Login onOpenRegister={() => setFormType('register')} />}
            {formType == "register" && <Register onOpenLogin={() => setFormType('login')} onOpenRegister={() => setFormType('register')}  />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
