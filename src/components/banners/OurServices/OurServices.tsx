import {Box, Grid, Typography} from "@mui/material";
import {BasicCard} from "@/components/Card/Card";
import WebhookIcon from '@mui/icons-material/Webhook';
import BugReportIcon from '@mui/icons-material/BugReport';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CodeIcon from '@mui/icons-material/Code';

export const OurServices = () => {
  return (
    <Box sx={{ width: 1250 }} spacing={5}>
      <Typography variant="h2" sx={{ color: 'white' }} mb={7} gutterBottom>
        <CodeIcon sx={{ color: 'rgba(84,84,84,0.87)', fontSize: 50, marginRight: 2 }} />Разработка приложения <br/>
        <CodeIcon sx={{ color: 'rgba(84,84,84,0.87)', fontSize: 50, marginRight: 2 }} />с начала и до конца
      </Typography>
      <Grid container spacing={1}>
        <Grid xs={2} md={3}>
          <BasicCard
            title="Дизайн"
            description="Дизайн сайта можно выбрать из готовых шаблонов или заказать уникальный дизайн"
            icon={<ConnectWithoutContactIcon sx={{ color: '#38bdcf', fontSize: 80 }}  />}
          />
        </Grid>
        <Grid xs={2} md={3}>
          <BasicCard
            title="Разработка Приложения"
            description="Разарботаем продающую страницу с чат-ботом с искусственным интелектом, которая приведет клиентов и увеличит прибыль"
            icon={<AutoFixHighIcon sx={{ color: '#d82b62', fontSize: 80 }} />}
          />
        </Grid>
        <Grid xs={2} md={3}>
          <BasicCard
            title="Яндекс Директ"
            description="Настроим Яндекс Директ и Ваши клиенты найдут Вас. Детальная аналитика покажет, сколько клиентов привела реклама"
            icon={<BugReportIcon sx={{ color: '#f78f46', fontSize: 80 }} />}
          />
        </Grid>
        <Grid xs={2} md={3}>
          <BasicCard
            title="Ревью сайта"
            description="Проведем вместе с Вами ревью сайта. Если требуются правки - поменяем!"
            icon={<WebhookIcon sx={{ color: '#01a987', fontSize: 80 }} />}
          />
        </Grid>
      </Grid>
    </Box>
  )
}