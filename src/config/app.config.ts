interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Delivery Driver', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'courier',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'Update own user information',
    'Create a new company',
  ],
  ownerAbilities: ['Manage user information', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3c44dba2-32d5-4379-acf1-58b193bb4665',
};
