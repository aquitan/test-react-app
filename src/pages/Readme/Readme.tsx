import { Box, Container, List, ListItem, Paper, Typography } from "@mui/material";

const Readme = () => {
    return (
        <Container maxWidth='md'>
            <Paper sx={{my: 4, p: 2}} elevation={3}>
                <Box>
                    <Typography component='h5' variant='h5'>
                        ## Что было использовано в проекте:
                    </Typography >
                    <List>
                        <ListItem>
                            <Typography>
                                Redux Toolkit - в качестве state-менеджера
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Material UI - в качестве основной стилизации
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Tailwind CSS - в качестве базовых стилей ( использовал tailwind в проектах)
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Json-server - для авторизации
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                React hook form на странице Login - использовал в проектах, умею работать
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                На других инпутах использовал просто управляемые инпуты через useState
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Изменение темы с использованием Контекста
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Дополнительная страница Readme для демонстрации роутинга помимо авторизации
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Paper>

            <Paper sx={{my: 4, p: 2}} elevation={3}>
                <Box>
                    <Typography component='h6' variant='h6'>
                        ### `npm run server` - запуск сервера
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography>
                                Запускается на http://localhost:3001
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Paper>
            <Paper sx={{my: 4, p: 2}} elevation={3}>
                <Box>
                    <Typography component='h6' variant='h6'>
                        ### `npm start` - запуск клиента в Dev моде
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography>
                                Запускается на http://localhost:3000
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    )
}
export default Readme;