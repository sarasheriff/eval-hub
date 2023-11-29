import React from "react";
import { Avatar, Card, Col, Row, Tag } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./hierarcy.css";

const HierarchyTeam = () => {
  let test2 = {
    team: "Trianglz",
    userProfilePicture:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUjSnH///8ZRG1pf5gAOGZug5sAO2ccRm4UQmwAM2MAOmcHPmry9Pfi5uuGlqpXcI2irr25wczT2uHI0NgmTXNgeJNbc4/b3+WRoLKos8EAMmObqLgALF/n6+55i6H4+fq/xtBPaIYyVXkAJFsAHFdGY4MAIVlAXoAALWCLm64pygYtAAAD/UlEQVR4nO3ajXKiMBQFYLBIEoJVEP9FRJetff8X3JsEMFTb2s7OCJnzzdSa4nQ4vTQkIZ4HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3CRo9jzz7Z32Dly+OqIUaUG/9xG/ns0/2FHyWcIWEf6YTjRww6oeoneavtOrnNG3RC6iK5bPH6kPUjKcPRsBMynseN4t1E5Ositg08oYyv/UlscvDCoZ6GEtpxXlUR+fttXzrc+yFdpcmRJISKGQs6EFDmOOk4HkbPPt1faHoaGRLqUcSB2gfucf1dyI4hBjQJZXjtRiMqYh54UU4ljOhiDS3DTdheh2sq3qsqXngw/498l85b6esQI3ZHbavIFHF9npgShnM3+tJWGulOtIheqEEFdTOhJ4vZPvX9Qt0zPiTk3/26PpKi9mdVJ+S7rGoKphJOzkFtkAGvgiahxwNVOX1F6oTBc0/sv7kmZKd2/OJowjChhJlek3E0IVe3SBPLrYSTpi9V3eupPKr3biZU06b5OdXXqZMJ+ZpKWFbmduFkQjUZXp0TM+VwMaEeeb/wkl530smEatpEs6dAjdukF7mXkKt10fE2Eic9fXIwoXr1U0WtSUXuXaVi0Vl6OgjnEp5XnYT5X9cSzrN8YsvLo2MJ0+Aj52oYsC7nEqbVtKtyLeFdSDgYQf5JwtyVhKPD632DfB5zV/eptvXU+9knBgAAAI+ytwJTq6HffjjamT7dtu78xj5srGVvi6sqm5Zlqb7KitF8ibHlYllbLNjbsp08Ld9G1nyKWtNpWcc5La+mPYio13kbm+r6WFttSRgJe6Ddee4929qPuTd734/NOHxkL1kVPRibf5ZwrpaeRsLe8xXZCXedhLN90cw0OgnjHiRkiyRJ6NSLzSZJxiVNicwWmdmlTliYDTWx7wf0sVTtATvSod2FEh6blpXQq5KNMlPrqqvouek0JqU80/ld1M4nSpjs9S4nHq3MVRpv1b6o/cQkHAs6tl3XNdQ7wsR7N6GnNp3uT6rEu95sQqFS5eqvzVTC+qyiuoZmy2VQJ9RTQt4k9Fjdml0Kez4sPfWEKn3rTcAfJ3y/Sbi1Eo6CNf37FoegBx1p48uEZyEEUwm3NwmDrRBhm/CP3n0j+TjWveueGj3oaIyvEmpTcZPwUvelc1EnbPrjqblP6NferOR8ntD/PuH2bkK/XwkDShh6OmHxeQ3FzVX6RQ2N/qw3ZlmmvzNrKKl/lhn6DbM/77UD00gllFlmf9Rq9cXPuz1W6iErjUdnA919+Z3O9kskHCS+Prbmg9zn/S1rs37kZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw2T8JOFgMby7C2gAAAABJRU5ErkJggg==",
    employees: [
      {
        name: "Engineering Team",
        employees: [
          {
            level: "Level-5",
            employees: [
              {
                id: 1,
                level: "Level-5",
                name: "Hadeer",
                job_title: "Senior Software Engineer",
              },
            ],
          },
          {
            level: "Level-3",
            employees: [
              {
                id: 3,
                level: "Level-3",
                name: "Sara",
                job_title: "Front-end Software Engineer 2",
              },
            ],
          },
          {
            level: "Level-2",
            employees: [
              {
                id: 2,
                level: "Level-2",
                name: "Ziad",
                job_title: "Software Engineer 1",
              },
              {
                id: 4,
                level: "Level-2",
                name: "Huda",
                job_title: "Front-end Software Engineer 1",
              },
            ],
          },
        ],
      },
      {
        name: "Product Team",
        employees: [
          {
            level: "Level-7",
            employees: [
              {
                id: 7,
                level: "Level-7",
                name: "Esraa",
                job_title: "Product Director",
              },
            ],
          },
          {
            level: "Level-3",
            employees: [
              {
                id: 6,
                level: "Level-3",
                name: "Yara",
                job_title: "Product Manager",
              },
            ],
          },
        ],
      },
      {
        name: "Quality Team",
        employees: [
          {
            level: "Level-6",
            employees: [
              {
                id: 8,
                level: "Level-6",
                name: "Mai",
                job_title: "Quality Team Lead",
              },
            ],
          },
          {
            level: "Level-2",
            employees: [
              {
                id: 5,
                level: "Level-2",
                name: "Menna",
                job_title: "Quality Control Engineer 2",
              },
            ],
          },
        ],
      },
    ],
  };

  const levels = {
    "Level-1": "#C41D7F",
    "Level-2": "#CF1322",
    "Level-3": "#D48806",
    "Level-4": "#f50",
    "Level-5": "#0958D9",
    "Level-6": "#7244BA",
    "Level-7": "#87d068",
  }

  const teamHierarchyRecurse = (teamHierarchy) => {
    console.log(teamHierarchy, "team");
    if (!!teamHierarchy.employees?.length) {
      return (
        <ul>
          {teamHierarchy.employees.map((user) => {
            console.log(user, "usersss");
            return (
              <li key={user?.userId}>
                <a className="hierarchy-children">
                  {(user?.id && user?.level) || user?.name ? (
                    <Card
                      size="small"
                      className={`parent ${
                        !!user.employees?.length ? "point-bottom" : ""
                      } point-top hierarchy-card ${
                        user?.level && user?.name ? "emp-bg" : "team-bg"
                      }`}
                      style={{ minWidth: 200, height: 160 }}
                    >
                      <Row style={{ height: "100%", display: "flex" }}>
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 24 }}
                          md={{ span: 24 }}
                          lg={{ span: 24 }}
                          xl={{ span: 24 }}
                          xxl={{ span: 24 }}
                          // style={{ display: "flex" }}
                          style={{ textAlign: "center", margin: "auto" }}
                        >
                          <Col
                            span={24}
                            // xs={{ span: 24 }}
                            // sm={{ span: 24 }}
                            // md={{ span: 5 }}
                            // lg={{ span: 5 }}
                            // xl={{ span: 5 }}
                            // xxl={{ span: 5 }}
                          >
                            {user?.userProfilePicture ? (
                              <Avatar
                                className="avatar-image bg-light-gray"
                                size={40}
                                src={user.userProfilePicture}
                              />
                            ) : (
                              <Avatar className="avatar-image" size={40}>
                                <h1 className="avatar-letter">
                                  {user.name && user.level ? (
                                    <UserOutlined
                                      style={{ fontSize: "20px" }}
                                    />
                                  ) : (
                                    <TeamOutlined
                                      style={{ fontSize: "20px" }}
                                    />
                                  )}
                                </h1>
                              </Avatar>
                            )}
                          </Col>
                          <Col span={24}>
                            <h3>{user.name}</h3>
                            <span className="position">{user.job_title}</span>
                          </Col>
                        </Col>
                      </Row>
                    </Card>
                  ) : (
                    <>
                      <Tag bordered={false} color={levels[user?.level]}>
                        {user?.level}
                      </Tag>
                    </>
                  )}
                </a>
                {teamHierarchyRecurse(user)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return;
    }
  };

  const renderContent = () => {
    // if (teamHierarchy?.userId)
    return (
      <>
        <div className={`tree zoom-100`}>
          <ul>
            <li>
              {/* parent */}
              <a className="hierarchy-parent">
                <Card
                  size="small"
                  className={`parent ${
                    !!test2.employees?.length ? "point-bottom" : ""
                  }`}
                  style={{ width: 326, height: 106, background: "none" }}
                >
                  <Row style={{ height: "100%" }}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 24 }}
                      lg={{ span: 24 }}
                      xl={{ span: 24 }}
                      xxl={{ span: 24 }}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Avatar
                        className="avatar-image bg-light-gray"
                        size={90}
                        src={test2.userProfilePicture}
                      />
                      {/* <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 5 }}
                        lg={{ span: 5 }}
                        xl={{ span: 5 }}
                        xxl={{ span: 5 }}
                      >
                        {test2.userProfilePicture ? (
                          <Avatar
                            className="avatar-image bg-light-gray"
                            size={40}
                            src={test2.userProfilePicture}
                          />
                        ) : (
                          <Avatar className="avatar-image" size={40}>
                            <h1 className="avatar-letter">
                              {test2.team?.charAt(0).toLocaleUpperCase()}
                            </h1>
                          </Avatar>
                        )}
                      </Col> */}
                      {/* <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 12 }}
                      >
                        <h3>{test2.team}</h3>
                        <span className="position">
                      
                          ---- tri
                       
                        </span>
                      </Col> */}
                    </Col>
                  </Row>
                </Card>
              </a>
              {/* children */}
              {teamHierarchyRecurse(test2)}
            </li>
          </ul>
        </div>
      </>
    );
    // else
    //   return (
    //     <EmptyState
    //       title="Employees hierarchy empty"
    //       desc="No employees added yet!."
    //       icon={<TreeIcon width='40' height='40' />}
    //     />
    //   );
  };
  return <>{renderContent()}</>;
};

export default HierarchyTeam;
