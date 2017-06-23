/**
 * The method to send logon parameters.
 * The NEVER will cause no logon action enabled.
 */
/**
 * The method to send logon parameters.
 * The NEVER will cause no logon action enabled.
 */ export var SendMethod;
(function (SendMethod) {
    SendMethod[SendMethod["GET"] = 1] = "GET";
    SendMethod[SendMethod["POST"] = 2] = "POST";
    SendMethod[SendMethod["NEVER"] = 3] = "NEVER";
})(SendMethod || (SendMethod = {}));
//# sourceMappingURL=common-types.js.map