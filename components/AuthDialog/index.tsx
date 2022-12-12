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

interface AuthDialog {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialog> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<"main" | "email">("main");

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
            <div onClick={() => setFormType('main')} className='cursor-pointer '><ArrowBackIosIcon/>Войти через почту</div>}</Typography>
            {formType == "main" && (
              <div>
                <Button className="mb-15" variant="contained" fullWidth>
                  Вконтакте{" "}
                </Button>
                <Button className="mb-15" variant="contained" fullWidth>
                  Google{" "}
                </Button>
                <Button onClick={() => setFormType('email')} className="mb-15" variant="contained" fullWidth>
                  Через почту{" "}
                </Button>
              </div>
            )}
            {formType == "email" && (
              <div>
                <form>
                  <TextField
                    className="mb-20"
                    size="small"
                    label="Почта"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    size="small"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                  />
                  <Divider className="mt-30 mb-20" />
                  <Button color="primary" variant="contained">
                    Войти
                  </Button>
                </form>
              </div>
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
