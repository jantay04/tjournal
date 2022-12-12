import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useTheme, useMediaQuery, Typography } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import styles from './Header.module.scss';
import { AuthDialog } from '../AuthDialog';

export const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img  className="mr-20 h-[35px]" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </a>
        </Link>
        <div  onClick={openAuthDialog} className='flex items-center text-[16px] hover:text-[#29b241] font-bold cursor-pointer' >
          <AccountCircleOutlinedIcon className='mr-[10px]'/>
          Войти
        </div>
      </div>
      <AuthDialog  onClose={closeAuthDialog} visible={authVisible}  />
    </Paper>
  );
};
