/**
 * The method to send logon parameters.
 * The NEVER will cause no logon action enabled.
 */
export enum SendMethod {
  GET = 1, POST, NEVER
}

/**
 * sending parameters to logon.
 */
export interface SendParameter {
  /**
   * name of the parameter
   */
  name: string;
  /**
   * value of the parameter
   */
  value: string;
  /**
   * at normal, the value will not shown befroe long taped.
   * and should disappear after released.
   * the attribute shown when the value is disappeared.
   */
  hint: string;
  /**
   * Isn't really needed.
   * Just used to manage state of UI.
   */
  display?: string;
}

/**
 * Parameters needed to logon a site.
 */
export interface SiteAuthorization {
  /**
   * Subject of the site.
   */
  subject: string;
  /**
   * Detail informateion（not necessary）.
   */
  description?: string;
  /**
   * Url to send parameters.（not necessary）.
   * if not specified, mearns cann't auto logon.
   */
  url?: string;
  /**
   * Method to send parameters.
   * if url was't specified, it should be NEVER.
   */
  method: SendMethod;
  /**
   * Parameters to send
   */
  parameters: SendParameter[];
}

/**
 * Logon model
 */
export interface PasswordModel {
  /**
   * To save private of user.
   * There should has a sencond logon, There defined the pattern fo second logon.
   */
  gusturePattern: number[];

  /**
   * Authorizations
   */
  authorizations: SiteAuthorization[];
}
