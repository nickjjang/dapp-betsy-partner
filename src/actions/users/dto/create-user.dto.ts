export class CreateUserDto {
  token: string;
  customFields: {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    phone: string;
    isCashOutAllowed: boolean;
    operatorUser: string;
    userCountry: string;
    userStatus: string;
  };
}
