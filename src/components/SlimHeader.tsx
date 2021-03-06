import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { getSiteConfig } from "../graphql/gatsby";
import { getSessionInfo, isLoggedIn } from "../utils/auth";
import Icon from "./Icon";

const dropdownModifiers = {
  flip: {
    enabled: true
  },
  shift: {
    enabled: true
  },
  preventOverflow: {
    enabled: true,
    boundariesElement: "viewport" as "viewport"
  },
  relativePosition: {
    enabled: true,
    fn: (data: any) => ({
      ...data,
      styles: {
        ...data.styles,
        borderRadius: "4px",
        transform: "translate3d(0px, 55px, 0px)",
        animationDuration: "0.2s"
      }
    })
  }
};

type SlimHeaderProps = Pick<
  NonNullable<ReturnType<typeof getSiteConfig>>,
  // tslint:disable-next-line: max-union-size
  "owners" | "slimHeaderLinks" | "languages"
> & { user: ReturnType<typeof getSessionInfo> } & {
  onLogout: (args: any) => any;
};

export const SlimHeader = ({
  owners,
  slimHeaderLinks,
  languages,
  user,
  onLogout
}: // tslint:disable-next-line: no-big-function
SlimHeaderProps) => {
  const { i18n, t } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(
    false
  );
  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);
  const [isLinksDropdownOpen, setIsLinksDropdownOpen] = React.useState(false);
  return (
    <div className="it-header-slim-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="it-header-slim-wrapper-content"
              role="navigation"
              aria-label="secondary-links"
            >
              {(owners || []).map(
                owner =>
                  owner &&
                  owner.url && (
                    <a
                      className="d-none d-lg-block navbar-brand"
                      href={owner.url}
                      key={owner.url}
                      role="button"
                      aria-expanded="false"
                      aria-label={`${owner.longName} - ${t("external_link")}`}
                      title={t("external_link")}
                      aria-controls="header-links"
                    >
                      <span>{owner.name}</span>
                      {owner.longName && (
                        <span className="d-none d-md-inline">
                          &nbsp; - &nbsp; {owner.longName}
                        </span>
                      )}
                    </a>
                  )
              )}
              <div className="nav-mobile">
                <nav aria-label="secondary-navigation">
                  {(owners || []).map(
                    owner =>
                      owner &&
                      owner.url && (
                        <a
                          className="d-lg-none it-opener collapsed"
                          href={owner.url}
                          key={owner.url}
                          role="button"
                          aria-expanded="false"
                          aria-controls="header-links"
                          aria-label={`${owner.longName} - ${t(
                            "external_link"
                          )}`}
                          title={t("external_link")}
                          onClick={e => {
                            e.preventDefault();
                            setIsLinksDropdownOpen(!isLinksDropdownOpen);
                          }}
                        >
                          <span>{owner.name}</span>
                          <Icon className="icon d-lg-none" icon="expand" />
                        </a>
                      )
                  )}
                  <div
                    className={`link-list-wrapper collapse ${
                      isLinksDropdownOpen ? "show" : ""
                    }`}
                    id="header-links"
                  >
                    <ul className="link-list">
                      {(slimHeaderLinks || []).map(
                        slimHeaderLink =>
                          slimHeaderLink &&
                          slimHeaderLink.name &&
                          slimHeaderLink.url && (
                            <li key={slimHeaderLink.name}>
                              <a
                                href={slimHeaderLink.url}
                                className="px-3"
                                aria-label={`${slimHeaderLink.name} - ${t(
                                  "external_link"
                                )}`}
                                title={t("external_link")}
                              >
                                {slimHeaderLink.name}
                              </a>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="header-slim-right-zone">
                {Array.isArray(languages) && languages.length > 1 && (
                  <Dropdown
                    className="nav-item"
                    isOpen={isLanguageDropdownOpen}
                    toggle={() =>
                      setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                    }
                  >
                    <DropdownToggle
                      caret={true}
                      tag="a"
                      className="nav-link"
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      {i18n.language}
                      <Icon className="icon d-block" icon="expand" />
                    </DropdownToggle>
                    <DropdownMenu
                      className="dropdown-menu"
                      modifiers={dropdownModifiers}
                    >
                      {(languages || []).map(
                        lang =>
                          lang &&
                          lang.name && (
                            <DropdownItem key={lang.name} tag="span">
                              <a
                                role="button"
                                href="#"
                                className="list-item text-primary"
                                onClick={() => i18n.changeLanguage(lang.name)}
                              >
                                <span>{lang.name}</span>
                              </a>
                            </DropdownItem>
                          )
                      )}
                    </DropdownMenu>
                  </Dropdown>
                )}
                <div className="it-access-top-wrapper">
                  {isLoggedIn() && user ? (
                    <Dropdown
                      isOpen={isUserDropdownOpen}
                      toggle={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    >
                      <DropdownToggle
                        caret={true}
                        className="bg-white text-primary font-weight-600 btn btn-xs px-3 py-1 text-decoration-none"
                        style={{
                          cursor: "pointer",
                          marginRight: "-16px"
                        }}
                      >
                        <Icon
                          className="icon d-block d-md-none text-primary"
                          style={{
                            fill: "#0066cc",
                            transform: "none"
                          }}
                          icon="user"
                        />
                        <span className="d-none d-md-inline-block text-lowercase text-decoration-none">
                          {user.userEmail}
                        </span>
                        <Icon
                          className="icon d-none d-md-inline-block text-primary"
                          style={{
                            fill: "#0066cc"
                          }}
                          icon="expand"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        className="dropdown-menu"
                        modifiers={dropdownModifiers}
                      >
                        <span className="d-inline-block d-md-none p-4 text-decoration-none">
                          {user.userEmail}
                        </span>
                        {/* <DropdownItem tag="span">
                          <a
                            className="list-item text-primary"
                            href={`/user/${user.userId}`}
                          >
                            <span>profile</span>
                          </a>
                        </DropdownItem> */}
                        <DropdownItem
                          className="list-item text-primary text-danger"
                          style={{ backgroundColor: "transparent" }}
                          onClick={onLogout}
                        >
                          <Trans i18nKey="logout" />
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <a
                      href="/"
                      className="bg-white text-primary font-weight-600 btn btn-xs px-3 py-2 text-decoration-none"
                    >
                      <Trans i18nKey="login" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlimHeader;
