import {
    Avatar,
    Container,
    Grid,
    IconButton,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Modal,
    TextField,
} from "@mui/material";
import imageIcon from "@mui/icon-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { friends } from "./data";
import { Box } from "@mui/system"
import { ChangeEvent, useEffect, useState } from "react";
import FriendAdd from "./components/FriendAdd";
import axios from "axios";

const Friends = (): JSX.Element => {
    const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
    const[friendList, setFriendList] = useState(friends);
    const [ open, setOpen ] =useState(false);

    const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        const inputText = event.currentTarget.value;
        if (inputText.length === 0) {
            setFriendList(friends);
        } else {
            const filteredFriends = friends.filter((friend) => 
            friend.name.includes(inputText)
            );
            setFriendList(filteredFriends);
        }
    };
    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };
    const getFriendList = async () => {
        const { data } = await axios.get<FriendType[]>(
            "http://localhost5000/friends/1"
        );
        setOriginalFriends(data);
        setFriendList(data);
    };

    useEffect(() => {
        getFriendList();
    });
    return (
        <Container>
            <Modal open={open} onClose={closeModal}>
                <FriendAdd />
            </Modal>
            <Box>
                <Grid container>
                    <Grid item x5={10.5}>
                        <TextField 
                        label="친구 검색"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        onChange={changeSearchText}
                    />
                    </Grid>
                    <Grid item xs={1.5}>
                        <Box sx={{ p: "8px" }}>
                            <IconButton color="primary" size="large" onClick={openModal}>
                                <PersonAddIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
