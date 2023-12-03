import React, { useState, useEffect } from "react";
import { Avatar, Card, Col, Row, Tag, Spin } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./hierarcy.css";
import { getHierarchyData } from "../../api";

const HierarchyTeam = () => {
  const levels = {
    "Level-1": "#C41D7F",
    "Level-2": "#CF1322",
    "Level-3": "#D48806",
    "Level-4": "#f50",
    "Level-5": "#0958D9",
    "Level-6": "#7244BA",
    "Level-7": "#87d068",
  };

  const [employeeHierarcyData, setEmployeeHierarcyData] = useState({});

  const adjustDataStructure = (data) => {
    return {
      team: "Squad",
      userProfilePicture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUjSnH///8ZRG1pf5gAOGZug5sAO2ccRm4UQmwAM2MAOmcHPmry9Pfi5uuGlqpXcI2irr25wczT2uHI0NgmTXNgeJNbc4/b3+WRoLKos8EAMmObqLgALF/n6+55i6H4+fq/xtBPaIYyVXkAJFsAHFdGY4MAIVlAXoAALWCLm64pygYtAAAD/UlEQVR4nO3ajXKiMBQFYLBIEoJVEP9FRJetff8X3JsEMFTb2s7OCJnzzdSa4nQ4vTQkIZ4HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3CRo9jzz7Z32Dly+OqIUaUG/9xG/ns0/2FHyWcIWEf6YTjRww6oeoneavtOrnNG3RC6iK5bPH6kPUjKcPRsBMynseN4t1E5Ositg08oYyv/UlscvDCoZ6GEtpxXlUR+fttXzrc+yFdpcmRJISKGQs6EFDmOOk4HkbPPt1faHoaGRLqUcSB2gfucf1dyI4hBjQJZXjtRiMqYh54UU4ljOhiDS3DTdheh2sq3qsqXngw/498l85b6esQI3ZHbavIFHF9npgShnM3+tJWGulOtIheqEEFdTOhJ4vZPvX9Qt0zPiTk3/26PpKi9mdVJ+S7rGoKphJOzkFtkAGvgiahxwNVOX1F6oTBc0/sv7kmZKd2/OJowjChhJlek3E0IVe3SBPLrYSTpi9V3eupPKr3biZU06b5OdXXqZMJ+ZpKWFbmduFkQjUZXp0TM+VwMaEeeb/wkl530smEatpEs6dAjdukF7mXkKt10fE2Eic9fXIwoXr1U0WtSUXuXaVi0Vl6OgjnEp5XnYT5X9cSzrN8YsvLo2MJ0+Aj52oYsC7nEqbVtKtyLeFdSDgYQf5JwtyVhKPD632DfB5zV/eptvXU+9knBgAAAI+ytwJTq6HffjjamT7dtu78xj5srGVvi6sqm5Zlqb7KitF8ibHlYllbLNjbsp08Ld9G1nyKWtNpWcc5La+mPYio13kbm+r6WFttSRgJe6Ddee4929qPuTd734/NOHxkL1kVPRibf5ZwrpaeRsLe8xXZCXedhLN90cw0OgnjHiRkiyRJ6NSLzSZJxiVNicwWmdmlTliYDTWx7wf0sVTtATvSod2FEh6blpXQq5KNMlPrqqvouek0JqU80/ld1M4nSpjs9S4nHq3MVRpv1b6o/cQkHAs6tl3XNdQ7wsR7N6GnNp3uT6rEu95sQqFS5eqvzVTC+qyiuoZmy2VQJ9RTQt4k9Fjdml0Kez4sPfWEKn3rTcAfJ3y/Sbi1Eo6CNf37FoegBx1p48uEZyEEUwm3NwmDrRBhm/CP3n0j+TjWveueGj3oaIyvEmpTcZPwUvelc1EnbPrjqblP6NferOR8ntD/PuH2bkK/XwkDShh6OmHxeQ3FzVX6RQ2N/qw3ZlmmvzNrKKl/lhn6DbM/77UD00gllFlmf9Rq9cXPuz1W6iErjUdnA919+Z3O9kskHCS+Prbmg9zn/S1rs37kZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw2T8JOFgMby7C2gAAAABJRU5ErkJggg==",
      employees: data.map((team) => ({
        name: team.team,
        employees: team.employees.map((employees) => ({
          level: employees.level,
          employees: employees.employees.map((employee) => ({
            id: employee.id,
            name: employee.name,
            level: employee.level,
            job_title: employee.job_title,
          })),
        })),
      })),
    };
  };

  const fetchData = async () => {
    try {
      const hierarchyData = await getHierarchyData();
      console.log("hierarchyData");
      console.log(hierarchyData);
      const adjustedData = adjustDataStructure(hierarchyData);
      console.log("adjustedData");
      console.log(adjustedData);
      setEmployeeHierarcyData(adjustedData);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const teamHierarchyRecurse = (teamHierarchy) => {
    console.log(!teamHierarchy.employees?.length)
    if (!!teamHierarchy.employees?.length) {
      return (
        <Spin tip="loading" spinning={!teamHierarchy.employees?.length}>
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
        </Spin>
      );
    } else {
      return;
    }
  };

  const renderContent = () => {
    console.log(employeeHierarcyData, "employeeHierarcyData2");
    // if (teamHierarchy?.userId)
    return (
      <>
        {/* <Spin tip="Loading..." spinning={!hierarchyData?.length}> */}
        <div className={`tree zoom-100`}>
          <ul>
            <li>
              {/* parent */}
              <a className="hierarchy-parent">
                <Card
                  size="small"
                  className={`parent ${
                    !!employeeHierarcyData.employees?.length ? "point-bottom" : ""
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
                        src={employeeHierarcyData.userProfilePicture}
                      />
                      {/* <Col
                          xs={{ span: 24 }}
                          sm={{ span: 24 }}
                          md={{ span: 5 }}
                          lg={{ span: 5 }}
                          xl={{ span: 5 }}
                          xxl={{ span: 5 }}
                        >
                          {employeeHierarcyData.userProfilePicture ? (
                            <Avatar
                              className="avatar-image bg-light-gray"
                              size={40}
                              src={employeeHierarcyData.userProfilePicture}
                            />
                          ) : (
                            <Avatar className="avatar-image" size={40}>
                              <h1 className="avatar-letter">
                                {employeeHierarcyData.team?.charAt(0).toLocaleUpperCase()}
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
                          <h3>{employeeHierarcyData.team}</h3>
                          <span className="position">
                        
                            ---- tri
                        
                          </span>
                        </Col> */}
                    </Col>
                  </Row>
                </Card>
              </a>
              {/* children */}
              {teamHierarchyRecurse(employeeHierarcyData)}
            </li>
          </ul>
        </div>
        {/* </Spin> */}
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
