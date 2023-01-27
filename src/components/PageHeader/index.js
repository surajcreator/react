import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import gql from 'graphql-tag';
import GraphQLData from '../../lib/GraphQLData';

const HEADER_QUERY = gql`
  query HeaderComponent($headerSettingId: String) {
    headerNavQuery: item(language: "en", path: $headerSettingId) {
      ... on PageHeader {
        backgroundColor {
          value
        }
        homePageItem {
          jsonValue
        }
        headerTitle {
          value
        }
        mainNavigationItems {
          targetItems {
            mainnavurl: url {
              url
            }
            ... on MetaBase {
              mainNavTitle: title {
                value
              }
            }
            children {
              results {
                id
                name
                ... on MetaBase {
                  subnavtitle: title {
                    value
                  }
                }
                subnavurl: url {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
const PageHeader = (props) => {
  return (
    <div>
      {props && props.headerQ.headerNavQuery && (
        <Navbar bg={props.headerQ.headerNavQuery.backgroundColor.value} expand="lg">
          <Container fluid>
            <Navbar.Brand href={props.headerQ.headerNavQuery.homePageItem.jsonValue.value.href}>
              {props.headerQ.headerNavQuery.headerTitle.value}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {props.headerQ.headerNavQuery.mainNavigationItems.targetItems &&
                  props.headerQ.headerNavQuery.mainNavigationItems.targetItems.map(
                    (mainNavItem, index) => (
                      <>
                        <NavDropdown
                          title={mainNavItem.__typename}
                          id="basic-nav-dropdown"
                          key={index}
                        >
                          {mainNavItem &&
                            mainNavItem.children.results.map((subNavItem) => (
                              <NavDropdown.Item key={subNavItem.id} href={subNavItem.subnavurl.url}>
                                {subNavItem.name}
                              </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                      </>
                    )
                  )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default GraphQLData(HEADER_QUERY, {
  name: 'headerQ',
  options: {
    variables: {
      headerSettingId: '{191CA8B0-CC3E-492C-AB5A-18BB3ACC9531}',
    },
  },
})(PageHeader);
