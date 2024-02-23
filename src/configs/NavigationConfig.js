import { 
  DashboardOutlined, 
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
  TransactionOutlined,
  UserAddOutlined,
  TableOutlined,
  ApiOutlined,
  ShopOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [
  {
  key: 'dashboards-dashboard',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},
]

const usrNavTree =[
  {
    key: 'components-data-display-table',
    path: `${APP_PREFIX_PATH}/components/data-display/table`,
    title: 'sidenav.components.dataDisplay.table',
    icon: TableOutlined,
    breadcrumb: false,
    submenu: []
  },
]
const usersNavTree = [
  {
    key: 'components-users',
    path: `${APP_PREFIX_PATH}/users/list`,
    title: 'Users',
    icon: UserAddOutlined  ,
    breadcrumb: false,
    submenu: []
  }
]
const prodNavTree = [
  {
    key: 'components-products',
    path: `${APP_PREFIX_PATH}/products`,
    title: 'Products',
    icon: ShopOutlined,
    breadcrumb: false,
    submenu: []
  },
]
const transNavTree = [
  {
    key: 'components-orders',
    path: `${APP_PREFIX_PATH}/transactions`,
    title: 'Transactions',
    icon: TransactionOutlined,
    breadcrumb: false,
    submenu: []
  },
]
const apidataNavTree = [
  {
    key: 'components-apidata',
    path: `${APP_PREFIX_PATH}/apidata`,
    title: 'API-Data',
    icon: ApiOutlined,
    breadcrumb: false,
    submenu: []
  },
]
const navigationConfig = [
  ...dashBoardNavTree,
  ...usersNavTree,
  ...prodNavTree,
  ...transNavTree,
  ...apidataNavTree
]

export default navigationConfig;
