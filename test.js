class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = { sidebarProfileOpen: false }
  
      this.handleNewPollPopup = this.handleNewPollPopup.bind(this);
      this.handleLogoutUser = this.handleLogoutUser.bind(this);
      this.handleAuthPopup = this.handleAuthPopup.bind(this);
    };
    handleToggleSidebarProfile = () => this.setState({ sidebarProfileOpen: !this.state.sidebarProfileOpen })
    handleNewPollPopup = (e) => {
      if (!!e && e.preventDefault) e.preventDefault();
      this.props.closeSidebar();
      this.props.openNewPollPopup();
    };
    handleLogoutUser = (e) => {
      if (!!e && e.preventDefault) e.preventDefault();
      const { closeSidebar, logoutUser } = this.props;
      closeSidebar();
      logoutUser();
    };
    handleAuthPopup = (e) => {
      if (!!e && e.preventDefault) e.preventDefault();
      this.props.closeSidebar();
      this.props.openAuthPopup();
    };
  
};
  Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    openAuthPopup: PropTypes.func.isRequired,
    openNewPollPopup: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    authedUser: PropTypes.shape({
      name: PropTypes.string
    })
  };