class NavbarController {
  constructor() {
    this.name = 'navbar';
     this.links = [
      {name: 'Search',  link: "search"},
      {name: 'User List', link : 'userlist'},
      {name: 'Statistic', link : "statistic"}
      ];
  }
}

export default NavbarController;
