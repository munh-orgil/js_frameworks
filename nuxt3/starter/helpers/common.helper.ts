export const getGenderName = (gender: number) => {
  if (!gender) return "";
  if (gender == 1) return "Эрэгтэй";
  else if (gender == 2) return "Эмэгтэй";
  else return "Бусад";
};

export const parseJwt = (token: string): any[] => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const tokenBody: ITokenBody = JSON.parse(jsonPayload);
    return tokenBody.grg;
  } catch (e) {
    console.warn("cannot parse jwt token");
    return [null, null, null, null, null, null, null, null];
  }
};

export const hasJwtUserId = (token: string): boolean => {
  const jwtData = parseJwt(token);
  return Boolean(jwtData[3]);
};

export interface ITokenBody {
  exp: number;
  grg: any[];
}

// const (
// 	IndexAppId      = 0
// 	IndexSystemCode = 1
// 	IndexTerminalId = 2
// 	IndexUserId     = 3
// 	IndexProfileId  = 4
// 	IndexRoles      = 5
// 	IndexOrgs       = 6
// 	IndexOthers     = 7
// )

export const parseToken = (token: string) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const tokenBody: ITokenBody = JSON.parse(jsonPayload);
  return tokenBody;
};
