
export enum SendMethod {
  GET = 1, POST, NEVER
}

export interface SendParameter {
  name: string;
  value: string;
  hint: string;
  display?: string;
}

export interface SiteAuthorization {
  subject: string;
  description?: string;
  url?: string;
  method: SendMethod;
  parameters: SendParameter[];
}

export interface PasswordModel {
  gusturePattern: number[];

  authorizations: SiteAuthorization[];
}
