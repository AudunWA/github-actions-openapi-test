/**
 * Tripletex API
 * 2.70.42
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "https://tripletex.no/v2",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "https://tripletex.no/v2"
};
export interface Activity {
    id?: number;
    version?: number;
    name?: string;
    "number"?: string;
    description?: string;
    activityType?: "GENERAL_ACTIVITY" | "PROJECT_GENERAL_ACTIVITY" | "PROJECT_SPECIFIC_ACTIVITY" | "TASK";
    isChargeable?: boolean;
    rate?: number;
    costPercentage?: number;
    displayName?: string;
}
export type ResponseWrapperActivity = {
    value?: Activity;
};
export interface ListResponseActivity {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Activity[];
}
export interface ListResponseActivityRead extends ListResponseActivity {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Activity[];
}
export interface Country {
    id?: number;
    version?: number;
}
export interface DeliveryAddress {
    id?: number;
    version?: number;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    country?: Country;
    knr?: number;
    gnr?: number;
    bnr?: number;
    fnr?: number;
    snr?: number;
    unitNumber?: string;
    name?: string;
}
export type ResponseWrapperDeliveryAddress = {
    value?: DeliveryAddress;
};
export interface ListResponseDeliveryAddress {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DeliveryAddress[];
}
export interface ListResponseDeliveryAddressRead extends ListResponseDeliveryAddress {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DeliveryAddress[];
}
export interface VatType {
    id?: number;
    version?: number;
    name?: string;
    "number"?: string;
    displayName?: string;
    percentage?: number;
    deductionPercentage?: number;
    parentType?: VatType;
}
export interface Currency {
    id?: number;
    version?: number;
    code?: string;
    description?: string;
    factor?: number;
    displayName?: string;
    isDisabled?: boolean;
}
export type InternationalId = {
    intAmeldingType?: "PASSPORT_NO" | "NATIONAL_INSURANCE_NO" | "TAX_IDENTIFICATION_NO" | "VALUE_ADDED_TAX_IDENTIFICATION_NO";
    country?: Country;
    "number"?: string;
};
export interface Address {
    id?: number;
    version?: number;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    country?: Country;
    knr?: number;
    gnr?: number;
    bnr?: number;
    fnr?: number;
    snr?: number;
    unitNumber?: string;
}
export interface Municipality {
    id?: number;
    version?: number;
}
export interface Division {
    id?: number;
    version?: number;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    municipalityDate?: string;
    municipality?: Municipality;
}
export type MaritimeEmployment = {
    shipRegister?: "NIS" | "NOR" | "FOREIGN";
    shipType?: "OTHER" | "DRILLING_PLATFORM" | "TOURIST";
    tradeArea?: "DOMESTIC" | "FOREIGN";
};
export interface OccupationCode {
    id?: number;
    version?: number;
    nameNO?: string;
    code?: string;
}
export interface EmploymentDetails {
    id?: number;
    version?: number;
    employment?: Employment;
    date?: string;
    employmentType?: "ORDINARY" | "MARITIME" | "FREELANCE";
    employmentForm?: "PERMANENT" | "TEMPORARY";
    maritimeEmployment?: MaritimeEmployment;
    remunerationType?: "MONTHLY_WAGE" | "HOURLY_WAGE" | "COMMISION_PERCENTAGE" | "FEE" | "PIECEWORK_WAGE";
    workingHoursScheme?: "NOT_SHIFT" | "ROUND_THE_CLOCK" | "SHIFT_365" | "OFFSHORE_336" | "CONTINUOUS" | "OTHER_SHIFT";
    shiftDurationHours?: number;
    occupationCode?: OccupationCode;
    percentageOfFullTimeEquivalent: number;
    annualSalary?: number;
    hourlyWage?: number;
    payrollTaxMunicipalityId?: Municipality;
}
export interface Employment {
    id?: number;
    version?: number;
    employee?: Employee;
    employmentId?: string;
    startDate: string;
    endDate?: string;
    employmentEndReason?: "EMPLOYMENT_END_EXPIRED" | "EMPLOYMENT_END_EMPLOYEE" | "EMPLOYMENT_END_EMPLOYER" | "EMPLOYMENT_END_WRONGLY_REPORTED" | "EMPLOYMENT_END_SYSTEM_OR_ACCOUNTANT_CHANGE" | "EMPLOYMENT_END_INTERNAL_CHANGE";
    division?: Division;
    lastSalaryChangeDate?: string;
    noEmploymentRelationship?: boolean;
    isMainEmployer?: boolean;
    taxDeductionCode?: "loennFraHovedarbeidsgiver" | "loennFraBiarbeidsgiver" | "pensjon" | "loennTilUtenrikstjenestemann" | "loennKunTrygdeavgiftTilUtenlandskBorger" | "loennKunTrygdeavgiftTilUtenlandskBorgerSomGrensegjenger" | "introduksjonsstoenad" | "ufoereytelserFraAndre" | "EMPTY";
    employmentDetails?: EmploymentDetails[];
}
export type HolidayAllowanceEarned = {
    year?: number;
    amount?: number;
    basis?: number;
    amountExtraHolidayWeek?: number;
};
export interface EmployeeCategory {
    id?: number;
    version?: number;
    name: string;
    "number"?: string;
    description?: string;
}
export interface Employee {
    id?: number;
    version?: number;
    firstName: string;
    lastName: string;
    employeeNumber?: string;
    dateOfBirth?: string;
    email?: string;
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    phoneNumberHome?: string;
    phoneNumberWork?: string;
    nationalIdentityNumber?: string;
    dnumber?: string;
    internationalId?: InternationalId;
    bankAccountNumber?: string;
    iban?: string;
    bic?: string;
    creditorBankCountryId?: number;
    usesAbroadPayment?: boolean;
    userType?: "STANDARD" | "EXTENDED" | "NO_ACCESS";
    comments?: string;
    address?: Address;
    department?: Department;
    employments?: Employment[];
    holidayAllowanceEarned?: HolidayAllowanceEarned;
    employeeCategory?: EmployeeCategory;
}
export interface Department {
    id?: number;
    version?: number;
    name: string;
    departmentNumber?: string;
    departmentManager?: Employee;
    isInactive?: boolean;
}
export interface Account {
    id?: number;
    version?: number;
    "number": number;
    name: string;
    description?: string;
    ledgerType?: "GENERAL" | "CUSTOMER" | "VENDOR" | "EMPLOYEE" | "ASSET";
    vatType?: VatType;
    vatLocked?: boolean;
    currency?: Currency;
    isCloseable?: boolean;
    isApplicableForSupplierInvoice?: boolean;
    requireReconciliation?: boolean;
    isInactive?: boolean;
    isBankAccount?: boolean;
    isInvoiceAccount?: boolean;
    bankAccountNumber?: string;
    bankAccountCountry?: Country;
    bankName?: string;
    bankAccountIBAN?: string;
    bankAccountSWIFT?: string;
    saftCode?: string;
    displayName?: string;
    requiresDepartment?: boolean;
    requiresProject?: boolean;
    invoicingDepartment?: Department;
}
export interface Asset {
    id?: number;
    version?: number;
    name: string;
    description: string;
    dateOfAcquisition: string;
    acquisitionCost?: number;
    account?: Account;
    depreciationAccount?: Account;
    incomingBalance?: number;
    accumulatedDepreciation?: number;
    lifetime?: number;
    depreciationMethod?: "MANUAL" | "STRAIGHT_LINE" | "TAX_RELATED" | "CUSTOMIZED_AMOUNT";
    depreciationFrom?: string;
    status?: "UNKNOWN" | "ACTIVE" | "SOLD" | "LOST" | "COMPLETED";
    customMonthlyWriteOff?: number;
    taxRelatedDepreciationPercentage?: number;
    depreciationRemainingValue?: number;
    hasHistoryFromExternalSystem?: boolean;
    externalLastDepreciation?: string;
    externalLastAccountedValue?: number;
    externalAccumulatedDepreciation?: number;
}
export type ResponseWrapperAsset = {
    value?: Asset;
};
export interface ListResponseAsset {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Asset[];
}
export interface ListResponseAssetRead extends ListResponseAsset {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Asset[];
}
export type AssetImport = {
    name: string;
    lifetime: number;
    dateOfAcquisition?: string;
    description: string;
    acquisitionCost?: number;
    incomingBalance?: number;
    accumulatedDepreciation?: number;
};
export type AssetAccountRow = {
    accountNumber?: string;
    accountName?: string;
    assets?: AssetImport[];
    balanceDifference?: number;
};
export interface ListResponseAssetAccountRow {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AssetAccountRow[];
}
export interface ListResponseAssetAccountRowRead extends ListResponseAssetAccountRow {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AssetAccountRow[];
}
export type AuthConfigDto = {
    loginUrl?: string;
    logoutUrl?: string;
    refreshSessionIframeUrl?: string;
    checkSessionIframeUrl?: string;
};
export type ResponseWrapperAuthConfigDto = {
    value?: AuthConfigDto;
};
export interface BalanceSheetAccount {
    account?: Account;
}
export interface ListResponseBalanceSheetAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BalanceSheetAccount[];
}
export interface ListResponseBalanceSheetAccountRead extends ListResponseBalanceSheetAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BalanceSheetAccount[];
}
export type AutoPaySupport = {
    id?: number;
    uploadNeeded?: boolean;
    isEikaType?: boolean;
    hasOrgNumber?: boolean;
    isPsd2Type?: boolean;
    hasApproveInOnlineBanking?: boolean;
    requiredBankFieldIds?: number[];
};
export interface Bank {
    id?: number;
    version?: number;
    autoPaySupport?: AutoPaySupport;
}
export type ResponseWrapperBank = {
    value?: Bank;
};
export interface ListResponseBank {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Bank[];
}
export interface ListResponseBankRead extends ListResponseBank {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Bank[];
}
export interface BankDashboardAdvice {
    id?: number;
    version?: number;
    adviceType?: "SHORTEN_DUE_DATE_ON_OUTGOING_INVOICES_TO_CUSTOMERS" | "INCREASE_DUE_DATE_ON_INCOMING_INVOICES_FROM_VENDORS" | "APPLY_FOR_CASH_CREDIT_WITH_TRIPLETEX_APRILA";
    isActive?: boolean;
    dateUpdated?: string;
    isCancelled?: boolean;
    dateCancelled?: string;
}
export type ResponseWrapperBankDashboardAdvice = {
    value?: BankDashboardAdvice;
};
export interface ListResponseBankDashboardAdvice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankDashboardAdvice[];
}
export interface ListResponseBankDashboardAdviceRead extends ListResponseBankDashboardAdvice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankDashboardAdvice[];
}
export interface AccountingPeriod {
    id?: number;
    version?: number;
}
export interface VoucherType {
    id?: number;
    version?: number;
    name?: string;
}
export interface CustomerCategory {
    id?: number;
    version?: number;
    name: string;
    "number"?: string;
    description?: string;
    "type"?: number;
    displayName?: string;
}
export interface CompanyBankAccountPresentation {
    iban?: string;
    bban?: string;
    bic?: string;
    country?: Country;
}
export interface Customer {
    id?: number;
    version?: number;
    name: string;
    organizationNumber?: string;
    supplierNumber?: number;
    customerNumber?: number;
    isSupplier?: boolean;
    accountManager?: Employee;
    email?: string;
    invoiceEmail?: string;
    overdueNoticeEmail?: string;
    bankAccounts?: string[];
    phoneNumber?: string;
    phoneNumberMobile?: string;
    description?: string;
    language?: "NO" | "EN";
    displayName?: string;
    isPrivateIndividual?: boolean;
    singleCustomerInvoice?: boolean;
    invoiceSendMethod?: "EMAIL" | "EHF" | "EFAKTURA" | "AVTALEGIRO" | "VIPPS" | "PAPER" | "MANUAL";
    emailAttachmentType?: "LINK" | "ATTACHMENT";
    postalAddress?: Address;
    physicalAddress?: Address;
    deliveryAddress?: DeliveryAddress;
    category1?: CustomerCategory;
    category2?: CustomerCategory;
    category3?: CustomerCategory;
    invoicesDueIn?: number;
    invoicesDueInType?: "DAYS" | "MONTHS" | "RECURRING_DAY_OF_MONTH";
    currency?: Currency;
    bankAccountPresentation?: CompanyBankAccountPresentation[];
    ledgerAccount?: Account;
    isFactoring?: boolean;
    invoiceSendSMSNotification?: boolean;
    isAutomaticSoftReminderEnabled?: boolean;
    isAutomaticReminderEnabled?: boolean;
    isAutomaticNoticeOfDebtCollectionEnabled?: boolean;
    discountPercentage?: number;
}
export interface Supplier {
    id?: number;
    version?: number;
    name: string;
    organizationNumber?: string;
    supplierNumber?: number;
    customerNumber?: number;
    isCustomer?: boolean;
    email?: string;
    bankAccounts?: string[];
    invoiceEmail?: string;
    overdueNoticeEmail?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    description?: string;
    isPrivateIndividual?: boolean;
    showProducts?: boolean;
    accountManager?: Employee;
    postalAddress?: Address;
    physicalAddress?: Address;
    deliveryAddress?: DeliveryAddress;
    category1?: CustomerCategory;
    category2?: CustomerCategory;
    category3?: CustomerCategory;
    bankAccountPresentation?: CompanyBankAccountPresentation[];
    currency?: Currency;
    ledgerAccount?: Account;
}
export interface ProjectCategory {
    id?: number;
    version?: number;
    name: string;
    "number"?: string;
    description?: string;
    displayName?: string;
}
export interface ProjectSpecificRate {
    id?: number;
    version?: number;
    hourlyRate: number;
    hourlyCostPercentage?: number;
    projectHourlyRate: ProjectHourlyRate;
    employee?: Employee;
    activity?: Activity;
}
export interface ProjectHourlyRate {
    id?: number;
    version?: number;
    project?: Project;
    startDate: string;
    showInProjectOrder?: boolean;
    hourlyRateModel: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    projectSpecificRates?: ProjectSpecificRate[];
    fixedRate?: number;
}
export interface ProjectParticipant {
    id?: number;
    version?: number;
    project?: Project;
    employee?: Employee;
    adminAccess?: boolean;
}
export interface Contact {
    id?: number;
    version?: number;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    email?: string;
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    phoneNumberWork?: string;
    customer?: Customer;
    department?: Department;
}
export interface DiscountGroup {
    id?: number;
    version?: number;
    name: string;
}
export interface ProductUnit {
    id?: number;
    version?: number;
    name: string;
    nameEN: string;
    nameShort?: string;
    nameShortEN?: string;
    commonCode: string;
    isDeletable?: boolean;
}
export interface Document {
    id?: number;
    version?: number;
    fileName: string;
}
export interface SupplierProduct {
    id?: number;
    version?: number;
    name?: string;
    "number"?: string;
    description?: string;
    ean?: string;
    costExcludingVatCurrency?: number;
    cost?: number;
    priceExcludingVatCurrency?: number;
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    vatType?: VatType;
    currency?: Currency;
    supplier: Supplier;
    resaleProduct?: Product;
    isMainSupplierProduct?: boolean;
}
export interface Product {
    id?: number;
    version?: number;
    name?: string;
    "number"?: string;
    description?: string;
    ean?: string;
    costExcludingVatCurrency?: number;
    expenses?: number;
    priceExcludingVatCurrency?: number;
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    discountGroup?: DiscountGroup;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    vatType?: VatType;
    currency?: Currency;
    department?: Department;
    account?: Account;
    supplier?: Supplier;
    resaleProduct?: Product;
    isDeletable?: boolean;
    hasSupplierProductConnected?: boolean;
    weight?: number;
    weightUnit?: "kg" | "g" | "hg";
    volume?: number;
    volumeUnit?: "cm3" | "dm3" | "m3";
    hsnCode?: string;
    image?: Document;
    mainSupplierProduct?: SupplierProduct;
}
export interface Inventory {
    id?: number;
    version?: number;
    name: string;
    "number"?: string;
    isMainInventory?: boolean;
    isInactive?: boolean;
    description?: string;
    email?: string;
    phone?: string;
    deletable?: boolean;
    address?: Address;
    lastStocking?: string;
    status?: string;
    hasLocations?: boolean;
    mainInventory?: boolean;
    inactive?: boolean;
}
export interface InventoryLocation {
    id?: number;
    version?: number;
    inventory: Inventory;
    name: string;
    isInactive?: boolean;
}
export interface OrderGroup {
    id?: number;
    version?: number;
    order: Order;
    title?: string;
    comment?: string;
    sortIndex?: number;
}
export interface OrderLine {
    id?: number;
    version?: number;
    product?: Product;
    inventory?: Inventory;
    inventoryLocation?: InventoryLocation;
    description?: string;
    count?: number;
    unitCostCurrency?: number;
    unitPriceExcludingVatCurrency?: number;
    currency?: Currency;
    markup?: number;
    discount?: number;
    vatType?: VatType;
    order?: Order;
    unitPriceIncludingVatCurrency?: number;
    isSubscription?: boolean;
    subscriptionPeriodStart?: string;
    subscriptionPeriodEnd?: string;
    orderGroup?: OrderGroup;
}
export interface Order {
    id?: number;
    version?: number;
    customer: Customer;
    contact?: Contact;
    attn?: Contact;
    receiverEmail?: string;
    overdueNoticeEmail?: string;
    "number"?: string;
    reference?: string;
    ourContact?: Contact;
    ourContactEmployee?: Employee;
    department?: Department;
    orderDate: string;
    project?: Project;
    invoiceComment?: string;
    currency?: Currency;
    invoicesDueIn?: number;
    invoicesDueInType?: "DAYS" | "MONTHS" | "RECURRING_DAY_OF_MONTH";
    isShowOpenPostsOnInvoices?: boolean;
    isClosed?: boolean;
    deliveryDate: string;
    deliveryAddress?: DeliveryAddress;
    deliveryComment?: string;
    isPrioritizeAmountsIncludingVat?: boolean;
    orderLineSorting?: "ID" | "PRODUCT" | "CUSTOM";
    orderLines?: OrderLine[];
    isSubscription?: boolean;
    subscriptionDuration?: number;
    subscriptionDurationType?: "MONTHS" | "YEAR";
    subscriptionPeriodsOnInvoice?: number;
    subscriptionInvoicingTimeInAdvanceOrArrears?: "ADVANCE" | "ARREARS";
    subscriptionInvoicingTime?: number;
    subscriptionInvoicingTimeType?: "DAYS" | "MONTHS";
    isSubscriptionAutoInvoicing?: boolean;
    preliminaryInvoice?: Invoice;
    sendMethodDescription?: string;
    invoiceOnAccountVatHigh?: boolean;
}
export interface InvoiceRemark {
    id?: number;
    version?: number;
    description?: string;
    postponeRemindersTo?: string;
}
export interface Invoice {
    id?: number;
    version?: number;
    invoiceNumber?: number;
    invoiceDate: string;
    customer?: Customer;
    invoiceDueDate: string;
    kid?: string;
    comment?: string;
    orders: Order[];
    voucher?: Voucher;
    currency?: Currency;
    invoiceRemarks?: string;
    invoiceRemark?: InvoiceRemark;
    paymentTypeId?: number;
    paidAmount?: number;
    ehfSendStatus?: "DO_NOT_SEND" | "SEND" | "SENT" | "SEND_FAILURE_RECIPIENT_NOT_FOUND";
}
export interface ProjectActivity {
    id?: number;
    version?: number;
    activity?: Activity;
    project?: Project;
    startDate?: string;
    endDate?: string;
    isClosed?: boolean;
    budgetHours?: number;
    budgetHourlyRateCurrency?: number;
    budgetFeeCurrency?: number;
}
export interface Project {
    id?: number;
    version?: number;
    name: string;
    "number"?: string;
    description?: string;
    projectManager: Employee;
    department?: Department;
    mainProject?: Project;
    startDate: string;
    endDate?: string;
    customer?: Customer;
    isClosed?: boolean;
    isReadyForInvoicing?: boolean;
    isInternal: boolean;
    isFixedPrice?: boolean;
    projectCategory?: ProjectCategory;
    deliveryAddress?: DeliveryAddress;
    displayNameFormat?: "NAME_STANDARD" | "NAME_INCL_CUSTOMER_NAME" | "NAME_INCL_PARENT_NAME" | "NAME_INCL_PARENT_NUMBER" | "NAME_INCL_PARENT_NAME_AND_NUMBER";
    reference?: string;
    externalAccountsNumber?: string;
    vatType?: VatType;
    fixedprice?: number;
    currency?: Currency;
    markUpOrderLines?: number;
    markUpFeesEarned?: number;
    isPriceCeiling?: boolean;
    priceCeilingAmount?: number;
    projectHourlyRates?: ProjectHourlyRate[];
    forParticipantsOnly?: boolean;
    participants?: ProjectParticipant[];
    contact?: Contact;
    attention?: Contact;
    invoiceComment?: string;
    preliminaryInvoice?: Invoice;
    generalProjectActivitiesPerProjectOnly?: boolean;
    projectActivities?: ProjectActivity[];
    invoiceDueDate?: number;
    invoiceDueDateType?: "DAYS" | "MONTHS" | "RECURRING_DAY_OF_MONTH";
    invoiceReceiverEmail?: string;
    accessType?: "NONE" | "READ" | "WRITE";
    useProductNetPrice?: boolean;
    ignoreCompanyProductDiscountAgreement?: boolean;
    invoiceOnAccountVatHigh?: boolean;
}
export interface CloseGroup {
    id?: number;
    version?: number;
    date?: string;
}
export interface Posting {
    id?: number;
    version?: number;
    voucher?: Voucher;
    date?: string;
    description?: string;
    account?: Account;
    amortizationAccount?: Account;
    amortizationStartDate?: string;
    amortizationEndDate?: string;
    customer?: Customer;
    supplier?: Supplier;
    employee?: Employee;
    project?: Project;
    product?: Product;
    department?: Department;
    vatType?: VatType;
    amount?: number;
    amountCurrency?: number;
    amountGross?: number;
    amountGrossCurrency?: number;
    currency?: Currency;
    closeGroup?: CloseGroup;
    invoiceNumber?: string;
    termOfPayment?: string;
    row?: number;
}
export interface Voucher {
    id?: number;
    version?: number;
    date: string;
    description: string;
    voucherType?: VoucherType;
    reverseVoucher?: Voucher;
    postings: Posting[];
    document?: Document;
    attachment?: Document;
    externalVoucherNumber?: string;
    ediDocument?: Document;
    supplierVoucherType?: "TYPE_SUPPLIER_INVOICE_SIMPLE" | "TYPE_SUPPLIER_INVOICE_DETAILED";
}
export interface BankReconciliation {
    id?: number;
    version?: number;
    account: Account;
    accountingPeriod: AccountingPeriod;
    voucher?: Voucher;
    isClosed?: boolean;
    "type": "MANUAL" | "AUTOMATIC";
    bankAccountClosingBalanceCurrency?: number;
    closedByContact?: Contact;
    closedByEmployee?: Employee;
}
export type ResponseWrapperBankReconciliation = {
    value?: BankReconciliation;
};
export interface ListResponseBankReconciliation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliation[];
}
export interface ListResponseBankReconciliationRead extends ListResponseBankReconciliation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliation[];
}
export interface BankReconciliationPaymentType {
    id?: number;
    version?: number;
    debitAccount?: Account;
    creditAccount?: Account;
}
export interface BankStatement {
    id?: number;
    version?: number;
    bank?: Bank;
}
export type BankTransactionPosting = {
    voucher?: Voucher;
    date?: string;
    description?: string;
    account?: Account;
    customer?: Customer;
    supplier?: Supplier;
    amount?: number;
    amountCurrency?: number;
    currency?: Currency;
    invoiceNumber?: string;
    postingMatchType?: "DEFAULT" | "INTERNAL_TRANSFER" | "WAGE" | "TAX" | "VAT";
};
export type TlxNumber = object;
export interface BankTransaction {
    id?: number;
    version?: number;
    postedDate?: string;
    description?: string;
    amountCurrency?: number;
    bankStatement?: BankStatement;
    account?: Account;
    groupedPostings?: BankTransactionPosting[];
    matchType?: "ONE_TRANSACTION_TO_ONE_POSTING" | "ONE_TRANSACTION_TO_MANY_POSTINGS" | "MANY_TRANSACTIONS_TO_ONE_POSTING" | "MANY_TRANSACTIONS_TO_MANY_POSTINGS" | "NO_MATCH" | "UNKNOWN";
    companyId?: number;
    bankReconciliationMatchSum?: TlxNumber;
}
export interface BankReconciliationMatch {
    id?: number;
    version?: number;
    bankReconciliation: BankReconciliation;
    "type"?: "MANUAL" | "PENDING_SUGGESTION" | "REJECTED_SUGGESTION" | "APPROVED_SUGGESTION" | "ADJUSTMENT" | "AUTO_MATCHED" | "REJECTED_AUTO_MATCH";
    transactions?: BankTransaction[];
    postings?: Posting[];
}
export type BankReconciliationAdjustment = {
    paymentType?: BankReconciliationPaymentType;
    bankTransactions?: BankTransaction[];
    postingDate?: string;
    amount?: number;
    postings?: Posting[];
    bankReconciliationMatch?: BankReconciliationMatch;
    date?: string;
    description?: string;
    interimAccount?: Account;
    voucherNumber?: string;
    voucherViewLink?: string;
    voucherDetailsLink?: string;
};
export interface ListResponseBankReconciliationAdjustment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationAdjustment[];
}
export interface ListResponseBankReconciliationAdjustmentRead extends ListResponseBankReconciliationAdjustment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationAdjustment[];
}
export type ResponseWrapperBankReconciliationMatch = {
    value?: BankReconciliationMatch;
};
export type ResponseWrapperInteger = {
    value?: number;
};
export interface ListResponseBankReconciliationMatch {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationMatch[];
}
export interface ListResponseBankReconciliationMatchRead extends ListResponseBankReconciliationMatch {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationMatch[];
}
export interface BankReconciliationMatchesCounter {
    id?: number;
    version?: number;
    bankReconciliationId?: number;
    autoMatchedMatches?: number;
    suggestedMatches?: number;
}
export type ResponseWrapperBankReconciliationMatchesCounter = {
    value?: BankReconciliationMatchesCounter;
};
export type ResponseWrapperBankReconciliationPaymentType = {
    value?: BankReconciliationPaymentType;
};
export interface ListResponseBankReconciliationPaymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationPaymentType[];
}
export interface ListResponseBankReconciliationPaymentTypeRead extends ListResponseBankReconciliationPaymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationPaymentType[];
}
export interface BankReconciliationSettings {
    id?: number;
    version?: number;
    numberOfMatchesPerPage: "ITEMS_10" | "ITEMS_50" | "ITEMS_100" | "ITEMS_500" | "ITEMS_1000" | "ITEMS_5000" | "ITEMS_10000";
}
export type ResponseWrapperBankReconciliationSettings = {
    value?: BankReconciliationSettings;
};
export type ResponseWrapperBankStatement = {
    value?: BankStatement;
};
export interface ListResponseBankStatement {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankStatement[];
}
export interface ListResponseBankStatementRead extends ListResponseBankStatement {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankStatement[];
}
export type ResponseWrapperBankTransaction = {
    value?: BankTransaction;
};
export interface ListResponseBankTransaction {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankTransaction[];
}
export interface ListResponseBankTransactionRead extends ListResponseBankTransaction {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankTransaction[];
}
export type ResponseWrapperObject = {
    value?: object;
};
export type ResponseWrapperBoolean = {
    value?: boolean;
};
export interface ApiConsumer {
    id?: number;
    version?: number;
    consumerName: string;
    emails: string;
}
export interface ConsumerToken {
    id?: number;
    version?: number;
    apiConsumer?: ApiConsumer;
    token?: string;
    expirationDate?: string;
}
export type ResponseWrapperConsumerToken = {
    value?: ConsumerToken;
};
export interface EmployeeToken {
    id?: number;
    version?: number;
    employee?: Employee;
    apiConsumer?: ApiConsumer;
    token: string;
    expirationDate?: string;
}
export type ResponseWrapperEmployeeToken = {
    value?: EmployeeToken;
};
export interface SessionToken {
    id?: number;
    version?: number;
    consumerToken?: ConsumerToken;
    employeeToken?: EmployeeToken;
    expirationDate: string;
    token: string;
}
export type ResponseWrapperSessionToken = {
    value?: SessionToken;
};
export interface Company {
    id?: number;
    version?: number;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    email?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    faxNumber?: string;
    address: Address;
    "type": "NONE" | "ENK" | "AS" | "NUF" | "ANS" | "DA" | "PRE" | "KS" | "ASA" | "BBL" | "BRL" | "GFS" | "SPA" | "SF" | "IKS" | "KF_FKF" | "FCD" | "EOFG" | "BA" | "STI" | "ORG" | "ESEK" | "SA" | "SAM" | "BO" | "VPFO" | "OS" | "FLI" | "Other";
    currency?: Currency;
}
export type LoggedInUserInfoDto = {
    employeeId?: number;
    employee?: Employee;
    companyId?: number;
    company?: Company;
    language?: string;
    loggedInWithConnect?: boolean;
};
export type ResponseWrapperLoggedInUserInfoDto = {
    value?: LoggedInUserInfoDto;
};
export interface Client {
    id?: number;
    version?: number;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    email?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    faxNumber?: string;
    address: Address;
    "type": "NONE" | "ENK" | "AS" | "NUF" | "ANS" | "DA" | "PRE" | "KS" | "ASA" | "BBL" | "BRL" | "GFS" | "SPA" | "SF" | "IKS" | "KF_FKF" | "FCD" | "EOFG" | "BA" | "STI" | "ORG" | "ESEK" | "SA" | "SAM" | "BO" | "VPFO" | "OS" | "FLI" | "Other";
    currency?: Currency;
}
export interface ListResponseClient {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Client[];
}
export interface ListResponseClientRead extends ListResponseClient {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Client[];
}
export type ResponseWrapperCompany = {
    value?: Company;
};
export interface ListResponseCompany {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Company[];
}
export interface ListResponseCompanyRead extends ListResponseCompany {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Company[];
}
export interface AltinnCompanyModule {
    id?: number;
    version?: number;
    altInnId: number;
    altInnPassword: string;
}
export type ResponseWrapperAltinnCompanyModule = {
    value?: AltinnCompanyModule;
};
export type SalesModuleDto = {
    name: "MAMUT" | "MAMUT_WITH_WAGE" | "AGRO_LICENCE" | "AGRO_CLIENT" | "AGRO_DOCUMENT_CENTER" | "AGRO_INVOICE" | "AGRO_INVOICE_MIGRATED" | "AGRO_WAGE" | "NO1TS" | "NO1TS_TRAVELREPORT" | "NO1TS_ACCOUNTING" | "BASIS" | "SMART" | "PLUSS" | "KOMPLETT" | "VVS" | "ELECTRO" | "ACCOUNTING_OFFICE" | "SMART_WAGE" | "SMART_TIME_TRACKING" | "SMART_PROJECT" | "OCR" | "API_V2" | "ELECTRONIC_VOUCHERS" | "UP_TO_100_VOUCHERS" | "UP_TO_500_VOUCHERS" | "UP_TO_1000_VOUCHERS" | "UP_TO_2000_VOUCHERS" | "UP_TO_3500_VOUCHERS" | "UP_TO_5000_VOUCHERS" | "UP_TO_10000_VOUCHERS" | "UNLIMITED_VOUCHERS" | "UP_TO_100_VOUCHERS_AUTOMATION" | "UP_TO_500_VOUCHERS_AUTOMATION" | "UP_TO_1000_VOUCHERS_AUTOMATION" | "UP_TO_2000_VOUCHERS_AUTOMATION" | "UP_TO_3500_VOUCHERS_AUTOMATION" | "UP_TO_5000_VOUCHERS_AUTOMATION" | "UP_TO_10000_VOUCHERS_AUTOMATION" | "UNLIMITED_VOUCHERS_AUTOMATION" | "LOGISTICS" | "MIKRO" | "AUTOPLUS_MINI" | "AUTOPLUS_MEDIUM" | "AUTOPLUS_STOR" | "INTEGRATION_PARTNER" | "PROJECT" | "YEAR_END_REPORTING_ENK" | "YEAR_END_REPORTING_AS";
    costStartDate?: string;
};
export interface ListResponseSalesModuleDto {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SalesModuleDto[];
}
export interface ListResponseSalesModuleDtoRead extends ListResponseSalesModuleDto {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SalesModuleDto[];
}
export type ResponseWrapperSalesModuleDto = {
    value?: SalesModuleDto;
};
export type ResponseWrapperContact = {
    value?: Contact;
};
export interface ListResponseContact {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Contact[];
}
export interface ListResponseContactRead extends ListResponseContact {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Contact[];
}
export type ResponseWrapperCountry = {
    value?: Country;
};
export interface ListResponseCountry {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Country[];
}
export interface ListResponseCountryRead extends ListResponseCountry {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Country[];
}
export type ResponseWrapperCurrency = {
    value?: Currency;
};
export interface ListResponseCurrency {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Currency[];
}
export interface ListResponseCurrencyRead extends ListResponseCurrency {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Currency[];
}
export interface CurrencyExchangeRate {
    id?: number;
    version?: number;
    targetCurrency: Currency;
    sourceCurrency: Currency;
    rate?: number;
    source?: "NORGES_BANK" | "HALLONEN";
    date?: string;
}
export type ResponseWrapperCurrencyExchangeRate = {
    value?: CurrencyExchangeRate;
};
export type ResponseWrapperCustomer = {
    value?: Customer;
};
export interface ListResponseCustomer {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Customer[];
}
export interface ListResponseCustomerRead extends ListResponseCustomer {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Customer[];
}
export type ResponseWrapperCustomerCategory = {
    value?: CustomerCategory;
};
export interface ListResponseCustomerCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CustomerCategory[];
}
export interface ListResponseCustomerCategoryRead extends ListResponseCustomerCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CustomerCategory[];
}
export type ResponseWrapperDepartment = {
    value?: Department;
};
export interface ListResponseDepartment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Department[];
}
export interface ListResponseDepartmentRead extends ListResponseDepartment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Department[];
}
export type ResponseWrapperDivision = {
    value?: Division;
};
export interface ListResponseDivision {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Division[];
}
export interface ListResponseDivisionRead extends ListResponseDivision {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Division[];
}
export type ResponseWrapperDocument = {
    value?: Document;
};
export interface DocumentArchive {
    id?: number;
    version?: number;
    fileName: string;
    archiveDate?: string;
    mimeType: string;
}
export type ResponseWrapperDocumentArchive = {
    value?: DocumentArchive;
};
export interface ListResponseDocumentArchive {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DocumentArchive[];
}
export interface ListResponseDocumentArchiveRead extends ListResponseDocumentArchive {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DocumentArchive[];
}
export type ResponseWrapperEmployee = {
    value?: Employee;
};
export interface ListResponseEmployee {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Employee[];
}
export interface ListResponseEmployeeRead extends ListResponseEmployee {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Employee[];
}
export type ResponseWrapperEmployeeCategory = {
    value?: EmployeeCategory;
};
export interface ListResponseEmployeeCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmployeeCategory[];
}
export interface ListResponseEmployeeCategoryRead extends ListResponseEmployeeCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmployeeCategory[];
}
export type ResponseWrapperEmployment = {
    value?: Employment;
};
export interface ListResponseEmployment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Employment[];
}
export interface ListResponseEmploymentRead extends ListResponseEmployment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Employment[];
}
export type ResponseWrapperEmploymentDetails = {
    value?: EmploymentDetails;
};
export interface ListResponseEmploymentDetails {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmploymentDetails[];
}
export interface ListResponseEmploymentDetailsRead extends ListResponseEmploymentDetails {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmploymentDetails[];
}
export interface EmploymentType {
    id?: number;
    version?: number;
    employmentType: "ORDINARY" | "MARITIME" | "FREELANCE";
    nameNO?: string;
    code?: string;
}
export interface ListResponseEmploymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmploymentType[];
}
export interface ListResponseEmploymentTypeRead extends ListResponseEmploymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmploymentType[];
}
export interface LeaveOfAbsence {
    id?: number;
    version?: number;
    employment?: Employment;
    importedLeaveOfAbsenceId?: string;
    startDate: string;
    endDate?: string;
    percentage: number;
    isWageDeduction?: boolean;
    "type"?: "LEAVE_OF_ABSENCE" | "FURLOUGH" | "PARENTAL_BENEFITS" | "MILITARY_SERVICE" | "EDUCATIONAL" | "COMPASSIONATE" | "OTHER_NOT_STATUTORILY_REQUIRED" | "OTHER_STATUTORILY_REQUIRED" | "EDUCATIONAL_NOT_STATUTORILY_REQUIRED" | "EDUCATIONAL_STATUTORILY_REQUIRED";
}
export type ResponseWrapperLeaveOfAbsence = {
    value?: LeaveOfAbsence;
};
export interface ListResponseLeaveOfAbsence {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LeaveOfAbsence[];
}
export interface ListResponseLeaveOfAbsenceRead extends ListResponseLeaveOfAbsence {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LeaveOfAbsence[];
}
export interface LeaveOfAbsenceType {
    id?: number;
    version?: number;
    leaveOfAbsenceType: "LEAVE_OF_ABSENCE" | "FURLOUGH" | "PARENTAL_BENEFITS" | "MILITARY_SERVICE" | "EDUCATIONAL" | "COMPASSIONATE" | "OTHER_NOT_STATUTORILY_REQUIRED" | "OTHER_STATUTORILY_REQUIRED" | "EDUCATIONAL_NOT_STATUTORILY_REQUIRED" | "EDUCATIONAL_STATUTORILY_REQUIRED";
    nameNO?: string;
    code?: string;
}
export interface ListResponseLeaveOfAbsenceType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LeaveOfAbsenceType[];
}
export interface ListResponseLeaveOfAbsenceTypeRead extends ListResponseLeaveOfAbsenceType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LeaveOfAbsenceType[];
}
export type ResponseWrapperOccupationCode = {
    value?: OccupationCode;
};
export interface ListResponseOccupationCode {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OccupationCode[];
}
export interface ListResponseOccupationCodeRead extends ListResponseOccupationCode {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OccupationCode[];
}
export interface RemunerationType {
    id?: number;
    version?: number;
    remunerationType: "MONTHLY_WAGE" | "HOURLY_WAGE" | "COMMISION_PERCENTAGE" | "FEE" | "PIECEWORK_WAGE";
    nameNO?: string;
    code?: string;
}
export interface ListResponseRemunerationType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: RemunerationType[];
}
export interface ListResponseRemunerationTypeRead extends ListResponseRemunerationType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: RemunerationType[];
}
export interface WorkingHoursScheme {
    id?: number;
    version?: number;
    workingHoursScheme: "NOT_SHIFT" | "ROUND_THE_CLOCK" | "SHIFT_365" | "OFFSHORE_336" | "CONTINUOUS" | "OTHER_SHIFT";
    nameNO?: string;
    code?: string;
}
export interface ListResponseWorkingHoursScheme {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: WorkingHoursScheme[];
}
export interface ListResponseWorkingHoursSchemeRead extends ListResponseWorkingHoursScheme {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: WorkingHoursScheme[];
}
export interface HourlyCostAndRate {
    id?: number;
    version?: number;
    employee?: Employee;
    date?: string;
    rate?: number;
    budgetRate?: number;
    hourCostRate?: number;
}
export type ResponseWrapperHourlyCostAndRate = {
    value?: HourlyCostAndRate;
};
export interface ListResponseHourlyCostAndRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: HourlyCostAndRate[];
}
export interface ListResponseHourlyCostAndRateRead extends ListResponseHourlyCostAndRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: HourlyCostAndRate[];
}
export interface SalesForceCountry {
    id?: number;
    version?: number;
}
export interface SalesForceAddress {
    id?: number;
    version?: number;
    country?: SalesForceCountry;
}
export interface SalesForceEmployee {
    id?: number;
    version?: number;
    address?: SalesForceAddress;
}
export interface EmployeeLoginInfo {
    id?: number;
    version?: number;
    salesForceEmployee?: SalesForceEmployee;
}
export type ResponseWrapperEmployeeLoginInfo = {
    value?: EmployeeLoginInfo;
};
export interface NextOfKin {
    id?: number;
    version?: number;
    employee?: Employee;
    name: string;
    phoneNumber: string;
    address?: string;
    typeOfRelationship?: "SPOUSE" | "PARTNER" | "PARENT" | "CHILD" | "SIBLING";
}
export type ResponseWrapperNextOfKin = {
    value?: NextOfKin;
};
export interface ListResponseNextOfKin {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: NextOfKin[];
}
export interface ListResponseNextOfKinRead extends ListResponseNextOfKin {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: NextOfKin[];
}
export interface EmployeePreferences {
    id: number;
    version?: number;
    employeeId?: number;
    companyId?: number;
    filterOnProjectParticipant?: boolean;
    filterOnProjectManager?: boolean;
    language?: "NO" | "EN";
}
export type ResponseWrapperEmployeePreferences = {
    value?: EmployeePreferences;
};
export interface ListResponseEmployeePreferences {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmployeePreferences[];
}
export interface ListResponseEmployeePreferencesRead extends ListResponseEmployeePreferences {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmployeePreferences[];
}
export interface StandardTime {
    id?: number;
    version?: number;
    employee?: Employee;
    fromDate: string;
    hoursPerDay: number;
}
export type ResponseWrapperStandardTime = {
    value?: StandardTime;
};
export interface ListResponseStandardTime {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: StandardTime[];
}
export interface ListResponseStandardTimeRead extends ListResponseStandardTime {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: StandardTime[];
}
export interface Entitlement {
    id?: number;
    version?: number;
    employee: Employee;
    entitlementId: number;
    customer: Company;
}
export type ResponseWrapperEntitlement = {
    value?: Entitlement;
};
export interface ListResponseEntitlement {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Entitlement[];
}
export interface ListResponseEntitlementRead extends ListResponseEntitlement {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Entitlement[];
}
export type EventInfoDescription = {
    description?: string;
    payloadModel?: string;
};
export type ResponseWrapperMapStringEventInfoDescription = {
    value?: {
        [key: string]: EventInfoDescription;
    };
};
export type WebHookWrapper = {
    value?: object;
    event?: string;
    subscriptionId?: number;
    id?: number;
};
export type EventInfoDto = {
    name?: string;
    description?: string;
    payloadModel?: string;
    examples?: WebHookWrapper[];
};
export type ResponseWrapperEventInfoDto = {
    value?: EventInfoDto;
};
export interface Subscription {
    id?: number;
    version?: number;
    event: string;
    targetUrl: string;
    fields?: string;
    status?: "ACTIVE" | "DISABLED" | "DISABLED_TOO_MANY_ERRORS" | "DISABLED_RATE_LIMIT_EXCEEDED" | "DISABLED_MISUSE";
    authHeaderName?: string;
    authHeaderValue?: string;
}
export type ResponseWrapperSubscription = {
    value?: Subscription;
};
export interface ListResponseSubscription {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Subscription[];
}
export interface ListResponseSubscriptionRead extends ListResponseSubscription {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Subscription[];
}
export type ResponseWrapperInventory = {
    value?: Inventory;
};
export interface ListResponseInventory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Inventory[];
}
export interface ListResponseInventoryRead extends ListResponseInventory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Inventory[];
}
export interface Inventories {
    product?: Product;
}
export interface ListResponseInventories {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Inventories[];
}
export interface ListResponseInventoriesRead extends ListResponseInventories {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Inventories[];
}
export type ResponseWrapperInventoryLocation = {
    value?: InventoryLocation;
};
export interface ListResponseInventoryLocation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: InventoryLocation[];
}
export interface ListResponseInventoryLocationRead extends ListResponseInventoryLocation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: InventoryLocation[];
}
export interface Stocktaking {
    id?: number;
    version?: number;
    date: string;
    comment?: string;
    typeOfStocktaking?: "ALL_PRODUCTS_WITH_INVENTORIES" | "INCLUDE_PRODUCTS" | "NO_PRODUCTS";
    inventory: Inventory;
    isCompleted?: boolean;
}
export type ResponseWrapperStocktaking = {
    value?: Stocktaking;
};
export interface ListResponseStocktaking {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Stocktaking[];
}
export interface ListResponseStocktakingRead extends ListResponseStocktaking {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Stocktaking[];
}
export interface ProductLine {
    id?: number;
    version?: number;
    stocktaking: Stocktaking;
    product: Product;
    count?: number;
    unitCostCurrency?: number;
    comment?: string;
    counter?: Employee;
    location?: InventoryLocation;
}
export type ResponseWrapperProductLine = {
    value?: ProductLine;
};
export interface ListResponseProductLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductLine[];
}
export interface ListResponseProductLineRead extends ListResponseProductLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductLine[];
}
export type ResponseWrapperInvoice = {
    value?: Invoice;
};
export interface ListResponseInvoice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Invoice[];
}
export interface ListResponseInvoiceRead extends ListResponseInvoice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Invoice[];
}
export type ResponseWrapperInvoiceRemark = {
    value?: InvoiceRemark;
};
export interface PaymentType {
    id?: number;
    version?: number;
    description: string;
    displayName: string;
    debitAccount?: Account;
    creditAccount?: Account;
    vatType?: VatType;
    customer?: Customer;
    supplier?: Supplier;
}
export type ResponseWrapperPaymentType = {
    value?: PaymentType;
};
export interface ListResponsePaymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PaymentType[];
}
export interface ListResponsePaymentTypeRead extends ListResponsePaymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PaymentType[];
}
export interface ProjectInvoiceDetails {
    id?: number;
    version?: number;
    project?: Project;
    vatType?: VatType;
    invoice?: Invoice;
}
export type ResponseWrapperProjectInvoiceDetails = {
    value?: ProjectInvoiceDetails;
};
export interface ListResponseProjectInvoiceDetails {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectInvoiceDetails[];
}
export interface ListResponseProjectInvoiceDetailsRead extends ListResponseProjectInvoiceDetails {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectInvoiceDetails[];
}
export interface LedgerAccount {
    account?: Account;
    currency?: Currency;
}
export interface ListResponseLedgerAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LedgerAccount[];
}
export interface ListResponseLedgerAccountRead extends ListResponseLedgerAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LedgerAccount[];
}
export type ResponseWrapperAccount = {
    value?: Account;
};
export interface ListResponseAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Account[];
}
export interface ListResponseAccountRead extends ListResponseAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Account[];
}
export type ResponseWrapperAccountingPeriod = {
    value?: AccountingPeriod;
};
export interface ListResponseAccountingPeriod {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AccountingPeriod[];
}
export interface ListResponseAccountingPeriodRead extends ListResponseAccountingPeriod {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AccountingPeriod[];
}
export interface AnnualAccount {
    id?: number;
    version?: number;
}
export type ResponseWrapperAnnualAccount = {
    value?: AnnualAccount;
};
export interface ListResponseAnnualAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AnnualAccount[];
}
export interface ListResponseAnnualAccountRead extends ListResponseAnnualAccount {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AnnualAccount[];
}
export type ResponseWrapperCloseGroup = {
    value?: CloseGroup;
};
export interface ListResponseCloseGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CloseGroup[];
}
export interface ListResponseCloseGroupRead extends ListResponseCloseGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CloseGroup[];
}
export interface PaymentTypeOut {
    id?: number;
    version?: number;
    description: string;
    isBruttoWageDeduction?: boolean;
    creditAccount: Account;
    showIncomingInvoice?: boolean;
    showWagePayment?: boolean;
    showVatReturns?: boolean;
    showWagePeriodTransaction?: boolean;
    requiresSeparateVoucher?: boolean;
    sequence?: number;
    isInactive?: boolean;
}
export type ResponseWrapperPaymentTypeOut = {
    value?: PaymentTypeOut;
};
export interface ListResponsePaymentTypeOut {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PaymentTypeOut[];
}
export interface ListResponsePaymentTypeOutRead extends ListResponsePaymentTypeOut {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PaymentTypeOut[];
}
export type ResponseWrapperPosting = {
    value?: Posting;
};
export interface ListResponsePosting {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Posting[];
}
export interface ListResponsePostingRead extends ListResponsePosting {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Posting[];
}
export type ResponseWrapperVatType = {
    value?: VatType;
};
export interface ListResponseVatType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatType[];
}
export interface ListResponseVatTypeRead extends ListResponseVatType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatType[];
}
export type ResponseWrapperVoucher = {
    value?: Voucher;
};
export type OpeningBalanceBalancePosting = {
    account: Account;
    project?: Project;
    department?: Department;
    product?: Product;
    employee?: Employee;
    amount: number;
    amountCurrency?: number;
};
export type OpeningBalanceCustomerPosting = {
    customer: Customer;
    amount: number;
    description?: string;
};
export type OpeningBalanceSupplierPosting = {
    supplier: Supplier;
    amount: number;
    description?: string;
};
export type OpeningBalanceEmployeePosting = {
    employee: Employee;
    amount: number;
    description?: string;
};
export type OpeningBalance = {
    voucherDate: string;
    balancePostings?: OpeningBalanceBalancePosting[];
    customerPostings?: OpeningBalanceCustomerPosting[];
    supplierPostings?: OpeningBalanceSupplierPosting[];
    employeePostings?: OpeningBalanceEmployeePosting[];
};
export interface VoucherSearchResponse {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Voucher[];
    totalNumberOfPostings?: number;
}
export interface VoucherSearchResponseRead extends VoucherSearchResponse {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Voucher[];
    totalNumberOfPostings?: number;
}
export interface Delete {
    available?: boolean;
    reasons?: string[];
}
export type VoucherOptions = {
    "delete"?: Delete;
};
export type ResponseWrapperVoucherOptions = {
    value?: VoucherOptions;
};
export interface ListResponseVoucher {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Voucher[];
}
export interface ListResponseVoucherRead extends ListResponseVoucher {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Voucher[];
}
export interface HistoricalPosting {
    id?: number;
    version?: number;
    voucher?: Voucher;
    date: string;
    description?: string;
    account: Account;
    customer?: Customer;
    supplier?: Supplier;
    employee?: Employee;
    project?: Project;
    product?: Product;
    department?: Department;
    vatType?: VatType;
    amount: number;
    amountCurrency: number;
    amountGross: number;
    amountGrossCurrency: number;
    amountVat: number;
    currency: Currency;
    invoiceNumber?: string;
    termOfPayment?: string;
    closeGroup?: string;
}
export interface HistoricalVoucher {
    id?: number;
    version?: number;
    date: string;
    externalVoucherNumber: string;
    description: string;
    voucherType?: VoucherType;
    postings: HistoricalPosting[];
}
export interface ListResponseHistoricalVoucher {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: HistoricalVoucher[];
}
export interface ListResponseHistoricalVoucherRead extends ListResponseHistoricalVoucher {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: HistoricalVoucher[];
}
export type ResponseWrapperVoucherType = {
    value?: VoucherType;
};
export interface ListResponseVoucherType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherType[];
}
export interface ListResponseVoucherTypeRead extends ListResponseVoucherType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherType[];
}
export interface ListResponseMunicipality {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Municipality[];
}
export interface ListResponseMunicipalityRead extends ListResponseMunicipality {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Municipality[];
}
export type MySubscriptionModuleDto = {
    id?: number;
    category?: string;
    title?: string;
    shortDescription?: string;
    descriptionPart1?: string;
    descriptionPart2?: string;
    perUsePrice?: TlxNumber;
    perUserPrice?: TlxNumber;
    monthlyPrice?: TlxNumber;
    yearlyPrice?: TlxNumber;
    startUpPrice?: TlxNumber;
    perUserOverLimitPrice?: TlxNumber;
    priceDescription?: string;
    active?: boolean;
    available?: boolean;
    processing?: boolean;
    infoText?: string;
    agreementTitle?: string;
    agreementText?: string;
    unavailableText?: string;
    licenseUrl?: string;
    licenseText?: string;
    redirectUrl?: string;
    priceLine1Text?: string;
    priceLine2Text?: string;
    priceLine3Text?: string;
    price1?: TlxNumber;
    price2?: TlxNumber;
    price3?: TlxNumber;
    canDeactivate?: boolean;
    deactivationError?: string;
};
export type ResponseWrapperMySubscriptionModuleDtoArray = {
    value?: MySubscriptionModuleDto[];
};
export type InvoiceOrderLineDto = {
    id?: number;
    invoiceNumber?: string;
    kid?: string;
    date?: string;
    termOfPayment?: string;
    amountCurrency?: TlxNumber;
    amountCurrencyOutstanding?: TlxNumber;
    isReminder?: boolean;
    isLastReminder?: boolean;
    lastReminderType?: number;
    hasCreditNote?: boolean;
    reminderType?: number;
    reminderTypeDescription?: string;
    statusText?: string;
};
export type ResponseWrapperInvoiceOrderLineDtoArray = {
    value?: InvoiceOrderLineDto[];
};
export type AdditionalServiceOrderLineDto = {
    description?: string;
    "type"?: number;
    count?: TlxNumber;
    unitPrice?: TlxNumber;
    total?: TlxNumber;
};
export type ResponseWrapperAdditionalServiceOrderLineDtoArray = {
    value?: AdditionalServiceOrderLineDto[];
};
export type ResponseWrapperOrder = {
    value?: Order;
};
export interface ListResponseOrder {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Order[];
}
export interface ListResponseOrderRead extends ListResponseOrder {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Order[];
}
export type ResponseWrapperOrderGroup = {
    value?: OrderGroup;
};
export interface ListResponseOrderGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OrderGroup[];
}
export interface ListResponseOrderGroupRead extends ListResponseOrderGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OrderGroup[];
}
export type ResponseWrapperOrderLine = {
    value?: OrderLine;
};
export interface ListResponseOrderLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OrderLine[];
}
export interface ListResponseOrderLineRead extends ListResponseOrderLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OrderLine[];
}
export interface ExternalProduct {
    id?: number;
    version?: number;
    name?: string;
    elNumber?: string;
    nrfNumber?: string;
    priceExcludingVatCurrency?: number;
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    vatType?: VatType;
    currency?: Currency;
    department?: Department;
    account?: Account;
}
export type ResponseWrapperExternalProduct = {
    value?: ExternalProduct;
};
export interface ListResponseExternalProduct {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ExternalProduct[];
}
export interface ListResponseExternalProductRead extends ListResponseExternalProduct {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ExternalProduct[];
}
export type ResponseWrapperProduct = {
    value?: Product;
};
export interface ListResponseProduct {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Product[];
}
export interface ListResponseProductRead extends ListResponseProduct {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Product[];
}
export type ResponseWrapperSupplierProduct = {
    value?: SupplierProduct;
};
export interface ListResponseSupplierProduct {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SupplierProduct[];
}
export interface ListResponseSupplierProductRead extends ListResponseSupplierProduct {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SupplierProduct[];
}
export type ResponseWrapperDiscountGroup = {
    value?: DiscountGroup;
};
export interface ListResponseDiscountGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DiscountGroup[];
}
export interface ListResponseDiscountGroupRead extends ListResponseDiscountGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DiscountGroup[];
}
export interface ProductInventoryLocation {
    id?: number;
    version?: number;
    product: Product;
    inventory: Inventory;
    inventoryLocation?: InventoryLocation;
    isMainLocation?: boolean;
}
export type ResponseWrapperProductInventoryLocation = {
    value?: ProductInventoryLocation;
};
export interface ListResponseProductInventoryLocation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductInventoryLocation[];
}
export interface ListResponseProductInventoryLocationRead extends ListResponseProductInventoryLocation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductInventoryLocation[];
}
export interface LogisticsSettings {
    id?: number;
    version?: number;
    hasWarehouseLocation?: boolean;
    showOnboardingWizard?: boolean;
    moduleSuggestedProductNumber?: boolean;
    suggestedProductNumber?: string;
    purchaseOrderDefaultComment?: string;
}
export type ResponseWrapperLogisticsSettings = {
    value?: LogisticsSettings;
};
export interface ProductGroup {
    id?: number;
    version?: number;
    name: string;
    parentGroup?: ProductGroup;
}
export type ResponseWrapperProductGroup = {
    value?: ProductGroup;
};
export interface ListResponseProductGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductGroup[];
}
export interface ListResponseProductGroupRead extends ListResponseProductGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductGroup[];
}
export interface ProductGroupRelation {
    id?: number;
    version?: number;
    product: Product;
    productGroup: ProductGroup;
}
export type ResponseWrapperProductGroupRelation = {
    value?: ProductGroupRelation;
};
export interface ListResponseProductGroupRelation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductGroupRelation[];
}
export interface ListResponseProductGroupRelationRead extends ListResponseProductGroupRelation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductGroupRelation[];
}
export interface ProductPrice {
    id?: number;
    version?: number;
    product?: Product;
    fromDate?: string;
    toDate?: string;
    purchasePrice?: TlxNumber;
    purchasePriceCurrency?: number;
    costPrice?: TlxNumber;
    salesPriceExcludingVat?: TlxNumber;
    vatType?: VatType;
    salesPriceIncludingVat?: TlxNumber;
}
export interface ListResponseProductPrice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductPrice[];
}
export interface ListResponseProductPriceRead extends ListResponseProductPrice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductPrice[];
}
export type ResponseWrapperProductUnit = {
    value?: ProductUnit;
};
export interface ListResponseProductUnit {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductUnit[];
}
export interface ListResponseProductUnitRead extends ListResponseProductUnit {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductUnit[];
}
export interface ProductUnitMaster {
    id?: number;
    version?: number;
}
export type ResponseWrapperProductUnitMaster = {
    value?: ProductUnitMaster;
};
export interface ListResponseProductUnitMaster {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductUnitMaster[];
}
export interface ListResponseProductUnitMasterRead extends ListResponseProductUnitMaster {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductUnitMaster[];
}
export type ResponseWrapperProject = {
    value?: Project;
};
export interface ListResponseProject {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Project[];
}
export interface ListResponseProjectRead extends ListResponseProject {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Project[];
}
export type ResponseWrapperProjectCategory = {
    value?: ProjectCategory;
};
export interface ListResponseProjectCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectCategory[];
}
export interface ListResponseProjectCategoryRead extends ListResponseProjectCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectCategory[];
}
export interface ProjectOrderLine {
    id?: number;
    version?: number;
    product?: Product;
    inventory?: Inventory;
    inventoryLocation?: InventoryLocation;
    description?: string;
    count?: number;
    unitCostCurrency?: number;
    unitPriceExcludingVatCurrency?: number;
    currency?: Currency;
    markup?: number;
    discount?: number;
    vatType?: VatType;
    project: Project;
    date: string;
    isChargeable?: boolean;
    invoice?: Invoice;
}
export type ResponseWrapperProjectOrderLine = {
    value?: ProjectOrderLine;
};
export interface ListResponseProjectOrderLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectOrderLine[];
}
export interface ListResponseProjectOrderLineRead extends ListResponseProjectOrderLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectOrderLine[];
}
export type ResponseWrapperProjectParticipant = {
    value?: ProjectParticipant;
};
export interface ListResponseProjectParticipant {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectParticipant[];
}
export interface ListResponseProjectParticipantRead extends ListResponseProjectParticipant {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectParticipant[];
}
export interface ProjectPeriodInvoicingReserve {
    invoiceFeeReserveCurrency?: number;
    periodOrderLinesIncomeCurrency?: number;
    invoiceExtracostsReserveCurrency?: number;
    invoiceAkontoReserveAmountCurrency?: number;
    invoiceReserveTotalAmountCurrency?: number;
}
export type ResponseWrapperProjectPeriodInvoicingReserve = {
    value?: ProjectPeriodInvoicingReserve;
};
export interface ProjectPeriodInvoiced {
    sumAmountPaid?: number;
    sumAmountOutstanding?: number;
    sumAmountDue?: number;
    sumAmountDueOutstanding?: number;
    sumAmount?: number;
}
export type ResponseWrapperProjectPeriodInvoiced = {
    value?: ProjectPeriodInvoiced;
};
export interface ProjectPeriodOverallStatus {
    income?: number;
    costs?: number;
}
export type ResponseWrapperProjectPeriodOverallStatus = {
    value?: ProjectPeriodOverallStatus;
};
export interface ProjectPeriodMonthlyStatus {
    income?: number;
    costs?: number;
    dateFrom?: string;
    dateTo?: string;
}
export interface ListResponseProjectPeriodMonthlyStatus {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectPeriodMonthlyStatus[];
}
export interface ListResponseProjectPeriodMonthlyStatusRead extends ListResponseProjectPeriodMonthlyStatus {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectPeriodMonthlyStatus[];
}
export interface ProjectPeriodHourlyReport {
    chargeableHours?: number;
    nonChargeableHours?: number;
    approvedButUnchargedHours?: number;
    nonApprovedHours?: number;
    registeredHours?: number;
}
export type ResponseWrapperProjectPeriodHourlyReport = {
    value?: ProjectPeriodHourlyReport;
};
export interface ProjectBudgetStatus {
    totalTotalIncomeCurrency?: number;
    budgetTotalIncomeCurrency?: number;
}
export type ResponseWrapperProjectBudgetStatus = {
    value?: ProjectBudgetStatus;
};
export type ResponseWrapperProjectActivity = {
    value?: ProjectActivity;
};
export interface ProjectControlForm {
    id?: number;
    version?: number;
    title: string;
    comment: string;
    completed?: boolean;
}
export type ResponseWrapperProjectControlForm = {
    value?: ProjectControlForm;
};
export interface ListResponseProjectControlForm {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectControlForm[];
}
export interface ListResponseProjectControlFormRead extends ListResponseProjectControlForm {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectControlForm[];
}
export interface ProjectControlFormType {
    id?: number;
    version?: number;
    name?: string;
}
export type ResponseWrapperProjectControlFormType = {
    value?: ProjectControlFormType;
};
export interface ListResponseProjectControlFormType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectControlFormType[];
}
export interface ListResponseProjectControlFormTypeRead extends ListResponseProjectControlFormType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectControlFormType[];
}
export type ResponseWrapperProjectHourlyRate = {
    value?: ProjectHourlyRate;
};
export interface ListResponseProjectHourlyRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectHourlyRate[];
}
export interface ListResponseProjectHourlyRateRead extends ListResponseProjectHourlyRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectHourlyRate[];
}
export interface HourlyRate {
    id?: number;
    version?: number;
    startDate: string;
    hourlyRateModel: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    projectSpecificRates?: ProjectSpecificRate[];
    fixedRate?: number;
}
export type ResponseWrapperProjectSpecificRate = {
    value?: ProjectSpecificRate;
};
export interface ListResponseProjectSpecificRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectSpecificRate[];
}
export interface ListResponseProjectSpecificRateRead extends ListResponseProjectSpecificRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectSpecificRate[];
}
export type ResourcePlanHours = {
    label?: string;
    allocatedHours?: TlxNumber;
    workedHours?: TlxNumber;
};
export type ResourcePlanEmployee = {
    employeeId?: number;
    employeeName?: string;
    budget?: TlxNumber;
    remaining?: TlxNumber;
    totalHours?: TlxNumber;
    totalAllocated?: TlxNumber;
    hoursEntries?: ResourcePlanHours[];
};
export type ResourcePlanActivity = {
    activityId?: number;
    activityName?: string;
    employeeEntries?: ResourcePlanEmployee[];
};
export type ResourcePlanBudget = {
    projectId?: number;
    projectName?: string;
    periodStart?: string;
    periodEnd?: string;
    periodType?: "HOUR" | "DAY" | "WEEK" | "MONTH";
    activityEntries?: ResourcePlanActivity[];
};
export type ResponseWrapperResourcePlanBudget = {
    value?: ResourcePlanBudget;
};
export type ProjectSettings = {
    approveHourLists?: boolean;
    approveInvoices?: boolean;
    markReadyForInvoicing?: boolean;
    historicalInformation?: boolean;
    projectForecast?: boolean;
    budgetOnSubcontracts?: boolean;
    projectCategories?: boolean;
    referenceFee?: boolean;
    sortOrderProjects?: "SORT_ORDER_NAME_AND_NUMBER" | "SORT_ORDER_NAME";
    autoCloseInvoicedProjects?: boolean;
    mustApproveRegisteredHours?: boolean;
    showProjectOrderLinesToAllProjectParticipants?: boolean;
    hourCostPercentage?: boolean;
    fixedPriceProjectsFeeCalcMethod?: "FIXED_PRICE_PROJECTS_CALC_METHOD_INVOICED_FEE" | "FIXED_PRICE_PROJECTS_CALC_METHOD_PERCENT_COMPLETED";
    fixedPriceProjectsInvoiceByProgress?: boolean;
    projectBudgetReferenceFee?: boolean;
    allowMultipleProjectInvoiceVat?: boolean;
    standardReinvoicing?: boolean;
    isCurrentMonthDefaultPeriod?: boolean;
    showProjectOnboarding?: boolean;
    autoConnectIncomingOrderlineToProject?: boolean;
    autoGenerateProjectNumber?: boolean;
    autoGenerateStartingNumber?: number;
    projectNameScheme?: "NAME_STANDARD" | "NAME_INCL_CUSTOMER_NAME" | "NAME_INCL_PARENT_NAME" | "NAME_INCL_PARENT_NUMBER" | "NAME_INCL_PARENT_NAME_AND_NUMBER";
    projectTypeOfContract?: "PROJECT_FIXED_PRICE" | "PROJECT_HOUR_RATES";
    projectOrderLinesSortOrder?: "SORT_ORDER_ID" | "SORT_ORDER_DATE" | "SORT_ORDER_PRODUCT" | "SORT_ORDER_CUSTOM";
    projectHourlyRateModel?: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    onlyProjectMembersCanRegisterInfo?: boolean;
    onlyProjectActivitiesTimesheetRegistration?: boolean;
    hourlyRateProjectsWriteUpDown?: boolean;
    showRecentlyClosedProjectsOnSupplierInvoice?: boolean;
    defaultProjectContractComment?: string;
    defaultProjectInvoicingComment?: string;
    resourcePlanning?: boolean;
    resourceGroups?: boolean;
    holidayPlan?: boolean;
    resourcePlanPeriod?: "PERIOD_MONTH" | "PERIOD_WEEK" | "PERIOD_DAY";
    controlFormsRequiredForInvoicing?: ProjectControlFormType[];
    controlFormsRequiredForHourTracking?: ProjectControlFormType[];
    useLoggedInUserEmailOnProjectBudget?: boolean;
    emailOnProjectBudget?: string;
    useLoggedInUserEmailOnProjectContract?: boolean;
    emailOnProjectContract?: string;
    useLoggedInUserEmailOnDocuments?: boolean;
    emailOnDocuments?: string;
    useProductNetPrice?: boolean;
};
export type ResponseWrapperProjectSettings = {
    value?: ProjectSettings;
};
export interface Task {
    id?: number;
    version?: number;
}
export interface ListResponseTask {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Task[];
}
export interface ListResponseTaskRead extends ListResponseTask {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Task[];
}
export type ProjectSpecificRateTemplate = {
    hourlyRate?: number;
    hourlyCostPercentage?: number;
    employee?: Employee;
    activity?: Activity;
};
export type ProjectHourlyRateTemplate = {
    startDate?: string;
    showInProjectOrder?: boolean;
    hourlyRateModel?: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    projectSpecificRates?: ProjectSpecificRateTemplate[];
    fixedRate?: number;
};
export type ProjectTemplate = {
    name?: string;
    startDate?: string;
    endDate?: string;
    isInternal?: boolean;
    "number"?: string;
    displayNameFormat?: "NAME_STANDARD" | "NAME_INCL_CUSTOMER_NAME" | "NAME_INCL_PARENT_NAME" | "NAME_INCL_PARENT_NUMBER" | "NAME_INCL_PARENT_NAME_AND_NUMBER";
    projectManager?: Employee;
    department?: Department;
    mainProject?: Project;
    projectCategory?: ProjectCategory;
    reference?: string;
    externalAccountsNumber?: string;
    description?: string;
    invoiceComment?: string;
    attention?: Contact;
    contact?: Contact;
    customer?: Customer;
    deliveryAddress?: DeliveryAddress;
    vatType?: VatType;
    currency?: Currency;
    markUpOrderLines?: number;
    markUpFeesEarned?: number;
    isFixedPrice?: boolean;
    fixedprice?: number;
    isPriceCeiling?: boolean;
    priceCeilingAmount?: number;
    generalProjectActivitiesPerProjectOnly?: boolean;
    forParticipantsOnly?: boolean;
    projectHourlyRates?: ProjectHourlyRateTemplate[];
};
export type ResponseWrapperProjectTemplate = {
    value?: ProjectTemplate;
};
export interface Prospect {
    id?: number;
    version?: number;
    name?: string;
    description?: string;
    createdDate: string;
    customer?: Customer;
    salesEmployee?: Employee;
    isClosed?: boolean;
    closedReason?: number;
    closedDate?: string;
    competitor?: string;
    prospectType?: number;
    project?: Project;
    projectOffer?: Project;
    finalIncomeDate?: string;
    finalInitialValue?: number;
    finalMonthlyValue?: number;
    finalAdditionalServicesValue?: number;
}
export type ResponseWrapperProspect = {
    value?: Prospect;
};
export interface ListResponseProspect {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Prospect[];
}
export interface ListResponseProspectRead extends ListResponseProspect {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Prospect[];
}
export interface TransportType {
    id?: number;
    version?: number;
}
export interface PickupPoint {
    id?: number;
    version?: number;
    transportType?: TransportType;
}
export type ResponseWrapperPickupPoint = {
    value?: PickupPoint;
};
export interface ListResponsePickupPoint {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PickupPoint[];
}
export interface ListResponsePickupPointRead extends ListResponsePickupPoint {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PickupPoint[];
}
export interface PurchaseOrder {
    id?: number;
    version?: number;
    receiverEmail?: string;
    discount?: number;
    internalComment?: string;
    packingNoteMessage?: string;
    transporterMessage?: string;
    comments?: string;
    supplier: Supplier;
    deliveryDate: string;
    receivedDate?: string;
    project?: Project;
    department?: Department;
    deliveryAddress?: Address;
    creationDate?: string;
    isClosed?: boolean;
    ourContact: Employee;
    supplierContact?: Employee;
    attention?: Employee;
    status?: "STATUS_OPEN" | "STATUS_SENT" | "STATUS_RECEIVING" | "STATUS_CONFIRMED_DEVIATION_DETECTED" | "STATUS_DEVIATION_OPEN" | "STATUS_DEVIATION_CONFIRMED" | "STATUS_CLOSED" | "STATUS_CANCELLED" | "STATUS_CONFIRMED";
    currency?: Currency;
    restorder?: PurchaseOrder;
    transportType?: TransportType;
    pickupPoint?: PickupPoint;
    document?: Document;
    attachment?: Document;
    ediDocument?: Document;
    lastSentTimestamp?: string;
    lastSentEmployeeName?: string;
}
export type ResponseWrapperPurchaseOrder = {
    value?: PurchaseOrder;
};
export interface ListResponsePurchaseOrder {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrder[];
}
export interface ListResponsePurchaseOrderRead extends ListResponsePurchaseOrder {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrder[];
}
export type ContentDisposition = {
    "type"?: string;
    parameters?: {
        [key: string]: string;
    };
    fileName?: string;
    creationDate?: string;
    modificationDate?: string;
    readDate?: string;
    size?: number;
};
export type MediaType = {
    "type"?: string;
    subtype?: string;
    parameters?: {
        [key: string]: string;
    };
    wildcardType?: boolean;
    wildcardSubtype?: boolean;
};
export type MessageBodyWorkers = object;
export type Providers = object;
export type ParameterizedHeader = {
    value?: string;
    parameters?: {
        [key: string]: string;
    };
};
export type BodyPart = {
    contentDisposition?: ContentDisposition;
    entity?: object;
    headers?: {
        [key: string]: string[];
    };
    mediaType?: MediaType;
    messageBodyWorkers?: MessageBodyWorkers;
    parent?: MultiPart;
    providers?: Providers;
    parameterizedHeaders?: {
        [key: string]: ParameterizedHeader[];
    };
};
export type MultiPart = {
    contentDisposition?: ContentDisposition;
    entity?: object;
    headers?: {
        [key: string]: string[];
    };
    mediaType?: MediaType;
    messageBodyWorkers?: MessageBodyWorkers;
    parent?: MultiPart;
    providers?: Providers;
    bodyParts?: BodyPart[];
    parameterizedHeaders?: {
        [key: string]: ParameterizedHeader[];
    };
};
export type FormDataContentDisposition = {
    "type"?: string;
    parameters?: {
        [key: string]: string;
    };
    fileName?: string;
    creationDate?: string;
    modificationDate?: string;
    readDate?: string;
    size?: number;
    name?: string;
};
export type FormDataBodyPart = {
    contentDisposition?: ContentDisposition;
    entity?: object;
    headers?: {
        [key: string]: string[];
    };
    mediaType?: MediaType;
    messageBodyWorkers?: MessageBodyWorkers;
    parent?: MultiPart;
    providers?: Providers;
    name?: string;
    value?: string;
    formDataContentDisposition?: FormDataContentDisposition;
    simple?: boolean;
    parameterizedHeaders?: {
        [key: string]: ParameterizedHeader[];
    };
};
export type FormDataMultiPart = {
    contentDisposition?: ContentDisposition;
    entity?: object;
    headers?: {
        [key: string]: string[];
    };
    mediaType?: MediaType;
    messageBodyWorkers?: MessageBodyWorkers;
    parent?: MultiPart;
    providers?: Providers;
    bodyParts?: BodyPart[];
    fields?: {
        [key: string]: FormDataBodyPart[];
    };
    parameterizedHeaders?: {
        [key: string]: ParameterizedHeader[];
    };
};
export interface PurchaseOrderEmail {
    id?: number;
    version?: number;
    email?: string;
    subject?: string;
    message?: string;
}
export type ResponseWrapperTransportType = {
    value?: TransportType;
};
export interface ListResponseTransportType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TransportType[];
}
export interface ListResponseTransportTypeRead extends ListResponseTransportType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TransportType[];
}
export interface PurchaseOrderline {
    id?: number;
    version?: number;
    purchaseOrder: PurchaseOrder;
    product?: Product;
    supplierProduct?: SupplierProduct;
    resaleProduct?: Product;
    description?: string;
    count?: number;
    quantityReceived?: number;
    unitCostCurrency?: number;
    unitPriceExcludingVatCurrency?: number;
    unitListPriceCurrency?: number;
    unitPriceIncVatCurrency?: number;
    currency?: Currency;
    discount?: number;
    amountExcludingVatCurrency?: number;
}
export interface Deviation {
    id?: number;
    version?: number;
    purchaseOrderLine: PurchaseOrderline;
    date: string;
    cause?: "CAUSE_DEFECT" | "CAUSE_TOO_FEW" | "CAUSE_TOO_MANY" | "CAUSE_REPLACEMENT";
    action?: "ACTION_IGNORE" | "ACTION_GENERATE_RESTORDER" | "ACTION_RETURN" | "ACTION_RETURN_GENERATE_RESTORDER";
    comment?: string;
}
export type ResponseWrapperDeviation = {
    value?: Deviation;
};
export interface ListResponseDeviation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Deviation[];
}
export interface ListResponseDeviationRead extends ListResponseDeviation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Deviation[];
}
export interface GoodsReceiptLine {
    id?: number;
    version?: number;
    purchaseOrder?: PurchaseOrder;
    product: Product;
    resaleProduct?: Product;
    inventory?: Inventory;
    inventoryLocation?: InventoryLocation;
    quantityReceived: number;
}
export interface GoodsReceipt {
    id?: number;
    version?: number;
    purchaseOrder?: PurchaseOrder;
    registrationDate: string;
    receivedBy?: Employee;
    comment?: string;
    goodsReceiptLines: GoodsReceiptLine[];
}
export type ResponseWrapperGoodsReceipt = {
    value?: GoodsReceipt;
};
export interface ListResponseGoodsReceipt {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: GoodsReceipt[];
}
export interface ListResponseGoodsReceiptRead extends ListResponseGoodsReceipt {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: GoodsReceipt[];
}
export type ResponseWrapperGoodsReceiptLine = {
    value?: GoodsReceiptLine;
};
export interface ListResponseGoodsReceiptLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: GoodsReceiptLine[];
}
export interface ListResponseGoodsReceiptLineRead extends ListResponseGoodsReceiptLine {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: GoodsReceiptLine[];
}
export interface PurchaseOrderIncomingInvoiceRelation {
    id?: number;
    version?: number;
    orderOut: PurchaseOrder;
    voucher: Voucher;
}
export type ResponseWrapperPurchaseOrderIncomingInvoiceRelation = {
    value?: PurchaseOrderIncomingInvoiceRelation;
};
export interface ListResponsePurchaseOrderIncomingInvoiceRelation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrderIncomingInvoiceRelation[];
}
export interface ListResponsePurchaseOrderIncomingInvoiceRelationRead extends ListResponsePurchaseOrderIncomingInvoiceRelation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrderIncomingInvoiceRelation[];
}
export type ResponseWrapperPurchaseOrderline = {
    value?: PurchaseOrderline;
};
export interface ListResponsePurchaseOrderline {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrderline[];
}
export interface ListResponsePurchaseOrderlineRead extends ListResponsePurchaseOrderline {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrderline[];
}
export interface Reminder {
    id?: number;
    version?: number;
    termOfPayment: string;
    currency?: Currency;
    "type": "SOFT_REMINDER" | "REMINDER" | "NOTICE_OF_DEBT_COLLECTION" | "DEBT_COLLECTION";
    comment?: string;
    kid?: string;
    bankAccountNumber?: string;
    bankAccountIBAN?: string;
    bankAccountSWIFT?: string;
    bank?: string;
}
export type ResponseWrapperReminder = {
    value?: Reminder;
};
export interface ListResponseReminder {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Reminder[];
}
export interface ListResponseReminderRead extends ListResponseReminder {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Reminder[];
}
export type Rp2ModalPermissionsDto = {
    "readonly"?: boolean;
};
export type ResponseWrapperRp2ModalPermissionsDto = {
    value?: Rp2ModalPermissionsDto;
};
export interface ResultBudget {
    id?: number;
    version?: number;
    account: Account;
    accountingPeriod: AccountingPeriod;
    amount?: number;
    department?: Department;
    project?: Project;
    product?: Product;
    employee?: Employee;
}
export interface ListResponseResultBudget {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ResultBudget[];
}
export interface ListResponseResultBudgetRead extends ListResponseResultBudget {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ResultBudget[];
}
export interface SalaryType {
    id?: number;
    version?: number;
    "number"?: string;
    name?: string;
    description?: string;
}
export type ResponseWrapperSalaryType = {
    value?: SalaryType;
};
export interface ListResponseSalaryType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SalaryType[];
}
export interface ListResponseSalaryTypeRead extends ListResponseSalaryType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SalaryType[];
}
export interface SalaryCompilationLine {
    description?: string;
    amount?: number;
    taxable?: boolean;
    taxableDescription?: string;
}
export interface SalaryCompilation {
    employee?: number;
    year?: number;
    vacationPayBasis?: number;
    wages?: SalaryCompilationLine[];
    expenses?: SalaryCompilationLine[];
    taxDeductions?: SalaryCompilationLine[];
    mandatoryTaxDeductions?: SalaryCompilationLine[];
}
export type ResponseWrapperSalaryCompilation = {
    value?: SalaryCompilation;
};
export interface SalaryTransaction {
    id?: number;
    version?: number;
    date?: string;
    year: number;
    month: number;
    isHistorical?: boolean;
    paySlipsAvailableDate?: string;
    payslips: Payslip[];
}
export interface SalarySpecification {
    id?: number;
    version?: number;
    rate: number;
    count: number;
    project?: Project;
    department?: Department;
    salaryType: SalaryType;
    payslip?: Payslip;
    employee?: Employee;
    description?: string;
    year?: number;
    month?: number;
    amount?: number;
}
export interface Payslip {
    id?: number;
    version?: number;
    transaction?: SalaryTransaction;
    employee: Employee;
    date?: string;
    year?: number;
    month?: number;
    specifications?: SalarySpecification[];
}
export type ResponseWrapperPayslip = {
    value?: Payslip;
};
export interface ListResponsePayslip {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Payslip[];
}
export interface ListResponsePayslipRead extends ListResponsePayslip {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Payslip[];
}
export interface SalarySettings {
    id?: number;
    version?: number;
    municipality?: Municipality;
    payrollTaxCalcMethod: "AA" | "BB" | "CC" | "C2" | "DD" | "EE" | "GG" | "JJ" | "EMPTY";
}
export type ResponseWrapperSalarySettings = {
    value?: SalarySettings;
};
export interface CompanyHoliday {
    id?: number;
    version?: number;
    year?: number;
    days?: number;
    vacationPayPercentage1?: number;
    vacationPayPercentage2?: number;
    isMaxPercentage2Amount6G?: boolean;
}
export type ResponseWrapperCompanyHoliday = {
    value?: CompanyHoliday;
};
export interface ListResponseCompanyHoliday {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyHoliday[];
}
export interface ListResponseCompanyHolidayRead extends ListResponseCompanyHoliday {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyHoliday[];
}
export interface PensionScheme {
    id?: number;
    version?: number;
    "number": string;
    startDate: string;
    endDate?: string;
}
export type ResponseWrapperPensionScheme = {
    value?: PensionScheme;
};
export interface ListResponsePensionScheme {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PensionScheme[];
}
export interface ListResponsePensionSchemeRead extends ListResponsePensionScheme {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PensionScheme[];
}
export interface CompanyStandardTime {
    id?: number;
    version?: number;
    company?: Company;
    fromDate: string;
    hoursPerDay: number;
}
export type ResponseWrapperCompanyStandardTime = {
    value?: CompanyStandardTime;
};
export interface ListResponseCompanyStandardTime {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyStandardTime[];
}
export interface ListResponseCompanyStandardTimeRead extends ListResponseCompanyStandardTime {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyStandardTime[];
}
export type ResponseWrapperSalaryTransaction = {
    value?: SalaryTransaction;
};
export type ResponseWrapperSupplier = {
    value?: Supplier;
};
export interface ListResponseSupplier {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Supplier[];
}
export interface ListResponseSupplierRead extends ListResponseSupplier {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Supplier[];
}
export interface SupplierInvoice {
    id?: number;
    version?: number;
    invoiceNumber?: string;
    invoiceDate: string;
    supplier?: Supplier;
    invoiceDueDate: string;
    kidOrReceiverReference?: string;
    voucher?: Voucher;
    amountCurrency?: number;
    currency?: Currency;
}
export type ResponseWrapperSupplierInvoice = {
    value?: SupplierInvoice;
};
export interface ListResponseSupplierInvoice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SupplierInvoice[];
}
export interface ListResponseSupplierInvoiceRead extends ListResponseSupplierInvoice {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SupplierInvoice[];
}
export interface OrderLinePostingDto {
    id?: number;
    version?: number;
    posting: Posting;
    orderLine?: OrderLine;
}
export interface VoucherApprovalListElement {
    id?: number;
    version?: number;
    voucher?: Voucher;
    employee?: Employee;
    department?: Department;
    project?: Project;
    comment?: string;
    commentFromOriginator?: string;
}
export type ResponseWrapperVoucherApprovalListElement = {
    value?: VoucherApprovalListElement;
};
export interface TimesheetAllocated {
    id?: number;
    version?: number;
    employee?: Employee;
    project?: Project;
    activity?: Activity;
    date: string;
    hours: number;
    isApproved?: boolean;
    managerComment?: string;
}
export type ResponseWrapperTimesheetAllocated = {
    value?: TimesheetAllocated;
};
export interface ListResponseTimesheetAllocated {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetAllocated[];
}
export interface ListResponseTimesheetAllocatedRead extends ListResponseTimesheetAllocated {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetAllocated[];
}
export interface CompanyHolidays {
    id?: number;
    version?: number;
    date: string;
    percentage: number;
}
export type ResponseWrapperCompanyHolidays = {
    value?: CompanyHolidays;
};
export interface ListResponseCompanyHolidays {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyHolidays[];
}
export interface ListResponseCompanyHolidaysRead extends ListResponseCompanyHolidays {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyHolidays[];
}
export interface TimesheetEntry {
    id?: number;
    version?: number;
    project?: Project;
    activity: Activity;
    date: string;
    hours: number;
    employee: Employee;
    comment?: string;
    invoice?: Invoice;
}
export type ResponseWrapperTimesheetEntry = {
    value?: TimesheetEntry;
};
export interface TimesheetEntrySearchResponse {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetEntry[];
    sumAllHours?: number;
}
export interface TimesheetEntrySearchResponseRead extends TimesheetEntrySearchResponse {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetEntry[];
    sumAllHours?: number;
}
export interface ListResponseTimesheetEntry {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetEntry[];
}
export interface ListResponseTimesheetEntryRead extends ListResponseTimesheetEntry {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetEntry[];
}
export type ResponseWrapperBigDecimal = {
    value?: number;
};
export interface HourSummary {
    sumHours?: number;
    hoursWithPay?: number;
    hourlyWageHoursWithPay?: number;
    standardTime?: number;
    nonChargeableHours?: number;
    chargeableHours?: number;
    nonChargeableHoursWithPay?: number;
    budgetChargeableHours?: number;
}
export interface FlexSummary {
    incomingHourBalance?: number;
    outgoingHourBalance?: number;
    change?: number;
}
export interface VacationSummary {
    incomingVacationBalance?: number;
    outgoingVacationBalance?: number;
    vacationTakenInPeriod?: number;
    vacationTakenThisYear?: number;
}
export interface MonthlyStatus {
    id?: number;
    version?: number;
    employee?: Employee;
    approvedBy?: Employee;
    hoursPayout?: number;
    vacationPayout?: number;
    hourSummary?: HourSummary;
    flexSummary?: FlexSummary;
    vacationSummary?: VacationSummary;
}
export type ResponseWrapperMonthlyStatus = {
    value?: MonthlyStatus;
};
export interface ListResponseMonthlyStatus {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: MonthlyStatus[];
}
export interface ListResponseMonthlyStatusRead extends ListResponseMonthlyStatus {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: MonthlyStatus[];
}
export interface TimesheetProjectSalaryTypeSpecification {
    id?: number;
    version?: number;
    employee: Employee;
    project?: Project;
    salaryType: SalaryType;
    description?: string;
    date: string;
    count: number;
    wagePayment?: Payslip;
}
export type ResponseWrapperTimesheetProjectSalaryTypeSpecification = {
    value?: TimesheetProjectSalaryTypeSpecification;
};
export interface ListResponseTimesheetProjectSalaryTypeSpecification {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetProjectSalaryTypeSpecification[];
}
export interface ListResponseTimesheetProjectSalaryTypeSpecificationRead extends ListResponseTimesheetProjectSalaryTypeSpecification {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetProjectSalaryTypeSpecification[];
}
export interface TimesheetSalaryTypeSpecification {
    id?: number;
    version?: number;
    employee: Employee;
    salaryType: SalaryType;
    description?: string;
    date: string;
    count: number;
}
export type ResponseWrapperTimesheetSalaryTypeSpecification = {
    value?: TimesheetSalaryTypeSpecification;
};
export interface ListResponseTimesheetSalaryTypeSpecification {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetSalaryTypeSpecification[];
}
export interface ListResponseTimesheetSalaryTypeSpecificationRead extends ListResponseTimesheetSalaryTypeSpecification {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetSalaryTypeSpecification[];
}
export interface TimesheetSettings {
    id?: number;
    version?: number;
    timeClock?: boolean;
    timesheetCompleted?: boolean;
    flexBalance?: boolean;
    vacationBalance?: boolean;
    defaultProjectActivity?: Activity;
}
export type ResponseWrapperTimesheetSettings = {
    value?: TimesheetSettings;
};
export interface TimeClock {
    id?: number;
    version?: number;
    employee: Employee;
    project?: Project;
    activity?: Activity;
    timesheetEntry: TimesheetEntry;
    date: string;
    timeStart: string;
    timeStop: string;
    hoursStart?: number;
    lunchBreakDuration?: number;
}
export type ResponseWrapperTimeClock = {
    value?: TimeClock;
};
export interface ListResponseTimeClock {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimeClock[];
}
export interface ListResponseTimeClockRead extends ListResponseTimeClock {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimeClock[];
}
export interface Week {
    id?: number;
    version?: number;
    employee?: Employee;
    approvedBy?: Employee;
}
export interface ListResponseWeek {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Week[];
}
export interface ListResponseWeekRead extends ListResponseWeek {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Week[];
}
export type ResponseWrapperWeek = {
    value?: Week;
};
export type TravelDetails = {
    isForeignTravel?: boolean;
    isDayTrip?: boolean;
    isCompensationFromRates?: boolean;
    departureDate?: string;
    returnDate?: string;
    detailedJourneyDescription?: string;
    departureFrom?: string;
    destination?: string;
    departureTime?: string;
    returnTime?: string;
    purpose?: string;
};
export interface TravelExpenseRateCategory {
    id?: number;
    version?: number;
    ameldingWageCode?: number;
    wageCodeNumber?: string;
    isValidDayTrip?: boolean;
    isValidAccommodation?: boolean;
    isValidDomestic?: boolean;
    isValidForeignTravel?: boolean;
    isRequiresZone?: boolean;
    isRequiresOvernightAccommodation?: boolean;
    fromDate: string;
    toDate: string;
    "type"?: "PER_DIEM" | "ACCOMMODATION_ALLOWANCE" | "MILEAGE_ALLOWANCE";
}
export interface TravelExpenseRate {
    id?: number;
    version?: number;
    rateCategory: TravelExpenseRateCategory;
    zone: string;
    rate?: number;
    breakfastDeductionRate?: number;
    lunchDeductionRate?: number;
    dinnerDeductionRate?: number;
}
export interface PerDiemCompensation {
    id?: number;
    version?: number;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    countryCode?: string;
    travelExpenseZoneId?: number;
    overnightAccommodation?: "NONE" | "HOTEL" | "BOARDING_HOUSE_WITHOUT_COOKING" | "BOARDING_HOUSE_WITH_COOKING";
    location: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
    isDeductionForBreakfast?: boolean;
    isDeductionForLunch?: boolean;
    isDeductionForDinner?: boolean;
}
export interface TravelCostCategory {
    id?: number;
    version?: number;
    description: string;
    account?: Account;
    vatType?: VatType;
}
export interface TravelPaymentType {
    id?: number;
    version?: number;
    description: string;
    account?: Account;
}
export interface TravelExpenseParticipant {
    id?: number;
    version?: number;
    displayName?: string;
    employeeId?: number;
    cost: Cost;
}
export type Prediction = {
    predictedValue?: string;
    confidence?: string;
};
export interface Cost {
    id?: number;
    version?: number;
    travelExpense?: TravelExpense;
    vatType?: VatType;
    currency?: Currency;
    costCategory?: TravelCostCategory;
    paymentType: TravelPaymentType;
    category?: string;
    comments?: string;
    rate?: number;
    amountCurrencyIncVat: number;
    amountNOKInclVAT?: number;
    isChargeable?: boolean;
    date?: string;
    participants?: TravelExpenseParticipant[];
    predictions?: {
        [key: string]: Prediction;
    };
}
export interface TravelExpense {
    id?: number;
    version?: number;
    project?: Project;
    employee: Employee;
    approvedBy?: Employee;
    completedBy?: Employee;
    rejectedBy?: Employee;
    department?: Department;
    payslip?: Payslip;
    vatType?: VatType;
    paymentCurrency?: Currency;
    travelDetails?: TravelDetails;
    voucher?: Voucher;
    attachment?: Document;
    isChargeable?: boolean;
    isFixedInvoicedAmount?: boolean;
    isIncludeAttachedReceiptsWhenReinvoicing?: boolean;
    travelAdvance?: number;
    fixedInvoicedAmount?: number;
    invoice?: Invoice;
    title?: string;
    perDiemCompensations?: PerDiemCompensation[];
    costs?: Cost[];
}
export interface AccommodationAllowance {
    id?: number;
    version?: number;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    zone?: string;
    location: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
}
export type ResponseWrapperAccommodationAllowance = {
    value?: AccommodationAllowance;
};
export interface ListResponseAccommodationAllowance {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AccommodationAllowance[];
}
export interface ListResponseAccommodationAllowanceRead extends ListResponseAccommodationAllowance {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AccommodationAllowance[];
}
export type ResponseWrapperCost = {
    value?: Cost;
};
export interface ListResponseCost {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Cost[];
}
export interface ListResponseCostRead extends ListResponseCost {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Cost[];
}
export type ResponseWrapperTravelExpenseParticipant = {
    value?: TravelExpenseParticipant;
};
export interface ListResponseTravelExpenseParticipant {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseParticipant[];
}
export interface ListResponseTravelExpenseParticipantRead extends ListResponseTravelExpenseParticipant {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseParticipant[];
}
export interface MileageAllowance {
    id?: number;
    version?: number;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    date: string;
    departureLocation: string;
    destination: string;
    km?: number;
    rate?: number;
    amount?: number;
    isCompanyCar?: boolean;
    vehicleType?: number;
    passengerSupplement?: MileageAllowance;
    trailerSupplement?: MileageAllowance;
    tollCost?: Cost;
}
export interface DrivingStop {
    id?: number;
    version?: number;
    locationName: string;
    latitude?: number;
    longitude?: number;
    sortIndex?: number;
    "type"?: number;
    mileageAllowance: MileageAllowance;
}
export type ResponseWrapperDrivingStop = {
    value?: DrivingStop;
};
export type ResponseWrapperMileageAllowance = {
    value?: MileageAllowance;
};
export interface ListResponseMileageAllowance {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: MileageAllowance[];
}
export interface ListResponseMileageAllowanceRead extends ListResponseMileageAllowance {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: MileageAllowance[];
}
export interface Passenger {
    id?: number;
    version?: number;
    name: string;
    mileageAllowance?: MileageAllowance;
}
export type ResponseWrapperPassenger = {
    value?: Passenger;
};
export interface ListResponsePassenger {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Passenger[];
}
export interface ListResponsePassengerRead extends ListResponsePassenger {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Passenger[];
}
export type ResponseWrapperPerDiemCompensation = {
    value?: PerDiemCompensation;
};
export interface ListResponsePerDiemCompensation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PerDiemCompensation[];
}
export interface ListResponsePerDiemCompensationRead extends ListResponsePerDiemCompensation {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PerDiemCompensation[];
}
export type ResponseWrapperTravelExpense = {
    value?: TravelExpense;
};
export interface ListResponseTravelExpense {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpense[];
}
export interface ListResponseTravelExpenseRead extends ListResponseTravelExpense {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpense[];
}
export type ResponseWrapperTravelExpenseRate = {
    value?: TravelExpenseRate;
};
export interface ListResponseTravelExpenseRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRate[];
}
export interface ListResponseTravelExpenseRateRead extends ListResponseTravelExpenseRate {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRate[];
}
export type ResponseWrapperTravelExpenseRateCategory = {
    value?: TravelExpenseRateCategory;
};
export interface ListResponseTravelExpenseRateCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRateCategory[];
}
export interface ListResponseTravelExpenseRateCategoryRead extends ListResponseTravelExpenseRateCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRateCategory[];
}
export interface TravelExpenseRateCategoryGroup {
    id?: number;
    version?: number;
    isForeignTravel?: boolean;
    fromDate: string;
    toDate: string;
}
export type ResponseWrapperTravelExpenseRateCategoryGroup = {
    value?: TravelExpenseRateCategoryGroup;
};
export interface ListResponseTravelExpenseRateCategoryGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRateCategoryGroup[];
}
export interface ListResponseTravelExpenseRateCategoryGroupRead extends ListResponseTravelExpenseRateCategoryGroup {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRateCategoryGroup[];
}
export type ResponseWrapperTravelCostCategory = {
    value?: TravelCostCategory;
};
export interface ListResponseTravelCostCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelCostCategory[];
}
export interface ListResponseTravelCostCategoryRead extends ListResponseTravelCostCategory {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelCostCategory[];
}
export type ResponseWrapperTravelPaymentType = {
    value?: TravelPaymentType;
};
export interface ListResponseTravelPaymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelPaymentType[];
}
export interface ListResponseTravelPaymentTypeRead extends ListResponseTravelPaymentType {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelPaymentType[];
}
export interface TravelExpenseSettings {
    id?: number;
    version?: number;
    useRates?: boolean;
    approvalRequired?: boolean;
    taxFreePerDiemRates?: boolean;
    taxFreeMileageRates?: boolean;
    perDiemNotCompensated?: boolean;
    accommodationNotCompensated?: boolean;
    mileageNotCompensated?: boolean;
}
export type ResponseWrapperTravelExpenseSettings = {
    value?: TravelExpenseSettings;
};
export interface TravelExpenseZone {
    id?: number;
    version?: number;
}
export type ResponseWrapperTravelExpenseZone = {
    value?: TravelExpenseZone;
};
export interface ListResponseTravelExpenseZone {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseZone[];
}
export interface ListResponseTravelExpenseZoneRead extends ListResponseTravelExpenseZone {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseZone[];
}
export interface VatReturnsVatCodeComment {
    vatCode?: string;
}
export interface ListResponseVatReturnsVatCodeComment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatReturnsVatCodeComment[];
}
export interface ListResponseVatReturnsVatCodeCommentRead extends ListResponseVatReturnsVatCodeComment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatReturnsVatCodeComment[];
}
export interface VatReturnsComment {
    title?: string;
    technicalName?: string;
    description?: string;
    vatSpecificationType?: "DEFAULT" | "LOSS_OF_CLAIM" | "WITHDRAWAL" | "ADJUSTMENT" | "REVERSAL" | "COMPENSATION";
    expectedSign?: "ZERO" | "POSITIVE" | "NEGATIVE";
    deliveredSign?: "ZERO" | "POSITIVE" | "NEGATIVE";
}
export interface ListResponseVatReturnsComment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatReturnsComment[];
}
export interface ListResponseVatReturnsCommentRead extends ListResponseVatReturnsComment {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatReturnsComment[];
}
export interface VoucherMessage {
    id?: number;
    version?: number;
    voucherId?: number;
    content?: string;
    sender?: Employee;
    sendTime?: string;
}
export interface ListResponseVoucherMessage {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherMessage[];
}
export interface ListResponseVoucherMessageRead extends ListResponseVoucherMessage {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherMessage[];
}
export type ResponseWrapperVoucherMessage = {
    value?: VoucherMessage;
};
export interface VoucherStatus {
    id?: number;
    version?: number;
    voucher: Voucher;
    status?: "WAITING" | "DONE" | "SKIPPED" | "ERROR" | "NONE" | "PROCESSING" | "RECLAIMED";
    message?: "NONE" | "ONGOING" | "NEEDS_APPROVAL" | "WITHDRAWN" | "SETTLED";
    externalObjectUrl?: string;
    comment?: string;
    referenceNumber?: string;
}
export type ResponseWrapperVoucherStatus = {
    value?: VoucherStatus;
};
export interface ListResponseVoucherStatus {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherStatus[];
}
export interface ListResponseVoucherStatusRead extends ListResponseVoucherStatus {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherStatus[];
}
export type Favorite = {
    id?: number;
    rank?: number;
    name?: string;
    pageUrl?: string;
};
export type FavoriteMenu = {
    shouldShow?: boolean;
    favoriteList?: Favorite[];
};
export type ResponseWrapperFavoriteMenu = {
    value?: FavoriteMenu;
};
export type SegmentationModules = {
    moduleaccountinginternal?: boolean;
    moduleaccountingexternal?: boolean;
    moduledepartment?: boolean;
    moduleprojectprognosis?: boolean;
    moduleresourceallocation?: boolean;
    moduleprojecteconomy?: boolean;
    moduleinvoice?: boolean;
    modulebudget?: boolean;
    modulereferencefee?: boolean;
    moduleHourCost?: boolean;
    moduleemployee?: boolean;
    moduleproject?: boolean;
    moduleprojectcategory?: boolean;
    moduleProjectBudget?: boolean;
    moduletask?: boolean;
    moduleTravelExpense?: boolean;
    modulecustomer?: boolean;
    modulenote?: boolean;
    modulesubscription?: boolean;
    moduleproduct?: boolean;
    moduleVoucherExport?: boolean;
    moduleaccountingreports?: boolean;
    moduleCustomerCategories?: boolean;
    moduleCustomerCategory1?: boolean;
    moduleCustomerCategory2?: boolean;
    moduleCustomerCategory3?: boolean;
    moduleprojectsubcontract?: boolean;
    approvehourlists?: boolean;
    approveinvoices?: boolean;
    approvetravelreports?: boolean;
    completeweeklyhourlists?: boolean;
    completemonthlyhourlists?: boolean;
    approvemonthlyhourlists?: boolean;
    invoiceapprovedhoursmandatory?: boolean;
    modulePayrollAccounting?: boolean;
    modulePayrollAccountingNO?: boolean;
    modulehourlist?: boolean;
    moduleTimeBalance?: boolean;
    moduleVacationBalance?: boolean;
    moduleWorkingHours?: boolean;
    moduleCurrency?: boolean;
    moduleContact?: boolean;
    moduleAutoProjectNumber?: boolean;
    moduleWageExport?: boolean;
    approveWeeklyHourlists?: boolean;
    moduleProvisionSalary?: boolean;
    moduleOrderNumber?: boolean;
    moduleOrderDiscount?: boolean;
    moduleOrderMarkup?: boolean;
    moduleOrderLineCost?: boolean;
    moduleResourceGroups?: boolean;
    moduleVendor?: boolean;
    moduleAutoCustomerNumber?: boolean;
    moduleAutoVendorNumber?: boolean;
    moduleHistorical?: boolean;
    showTravelReportLetterhead?: boolean;
    moduleOcr?: boolean;
    moduleRemit?: boolean;
    moduleRemitNets?: boolean;
    moduleRemitZtl?: boolean;
    moduleRemitAutoPay?: boolean;
    moduleTravelExpenseRates?: boolean;
    moduleVoucherScanning?: boolean;
    moduleInvoiceScanning?: boolean;
    moduleHolydayPlan?: boolean;
    moduleEmployeeCategory?: boolean;
    multipleCustomerCategories?: boolean;
    moduleProductInvoice?: boolean;
    autoInvoicing?: boolean;
    moduleFactoring?: boolean;
    moduleEmployeeAccounting?: boolean;
    moduleDepartmentAccounting?: boolean;
    moduleProjectAccounting?: boolean;
    moduleWageProjectAccounting?: boolean;
    moduleProductAccounting?: boolean;
    moduleElectro?: boolean;
    moduleNrf?: boolean;
    moduleResultBudget?: boolean;
    moduleVoucherTypes?: boolean;
    moduleWarehouse?: boolean;
    moduleNetsEboks?: boolean;
    moduleNetsPrintSalary?: boolean;
    moduleNetsPrintInvoice?: boolean;
    hourlyRateProjectsWriteUpDown?: boolean;
    showRecentlyClosedProjectsOnSupplierInvoice?: boolean;
    moduleEmail?: boolean;
    sendPayslipsByEmail?: boolean;
    moduleApproveVoucher?: boolean;
    moduleApproveProjectVoucher?: boolean;
    moduleApproveDepartmentVoucher?: boolean;
    moduleArchive?: boolean;
    moduleOrderOut?: boolean;
    moduleMesan?: boolean;
    moduleAccountantConnectClient?: boolean;
    moduleDivisions?: boolean;
    moduleBoligmappa?: boolean;
    moduleAdditionProjectMarkup?: boolean;
    tripletexSupportLoginAccessCompanyLevel?: boolean;
    moduleCRM?: boolean;
    modulePensionreport?: boolean;
    moduleControlSchemaRequiredInvoicing?: boolean;
    moduleControlSchemaRequiredHourTracking?: boolean;
    moduleInvoiceOptionVipps?: boolean;
    moduleInvoiceOptionEfaktura?: boolean;
    moduleInvoiceOptionPaper?: boolean;
    moduleInvoiceOptionAvtaleGiro?: boolean;
    moduleInvoiceOptionEhfIncoming?: boolean;
    moduleInvoiceOptionEhfOutbound?: boolean;
    moduleAPI20?: boolean;
    moduleAgro?: boolean;
    moduleMamut?: boolean;
    moduleFactoringAprila?: boolean;
    moduleCashCreditAprila?: boolean;
    moduleInvoiceOptionAutoinvoiceEhf?: boolean;
    moduleSmartScan?: boolean;
    moduleAutoBankReconciliation?: boolean;
    moduleOffer?: boolean;
    moduleVoucherAutomation?: boolean;
    moduleAmortization?: boolean;
    moduleEncryptedPaySlip?: boolean;
    hourCostFactorProject?: boolean;
    yearEndReport?: boolean;
    moduleLogistics?: boolean;
};
export type SegmentationRoles = {
    roleAdministrator?: boolean;
    roleAccountAdministrator?: boolean;
    roleSystemAdministrator?: boolean;
    isAuthInvoicing?: boolean;
    isAuthCompanyAdmin?: boolean;
    isAuthReadOnly?: boolean;
    isAuthCreateOrder?: boolean;
    isAuthAccountingSettings?: boolean;
    isAuthCompanyWageAdmin?: boolean;
    isAuthTravelsAndExpensesAdminSettings?: boolean;
    isAuthInvoiceAdminSettings?: boolean;
    isAuthInboxVoucher?: boolean;
    isAutWageAdminSetting?: boolean;
    isAuthWageSettings?: boolean;
};
export type SegmentationData = {
    contextId?: number;
    orgNumber?: string;
    isTrialAccount?: boolean;
    isTestOrFreeCompany?: boolean;
    employeeId?: number;
    isAccountant?: boolean;
    isReseller?: boolean;
    employeeNumber?: number;
    packageName?: string;
    industry?: string;
    outgoingInvoices?: number;
    incomingInvoices?: number;
    companyStartDateYear?: string;
    companyType?: string;
    companyName?: string;
    mainAccountBank?: string;
    modules?: SegmentationModules;
    roles?: SegmentationRoles;
    pilotFeatures?: {
        [key: string]: boolean;
    };
    hackedOrSupportAccess?: boolean;
    tripletexCustomerCategoryId3?: number;
};
export type ResponseWrapperSegmentationData = {
    value?: SegmentationData;
};
export interface YearEndReportNote {
    id?: number;
    version?: number;
    name?: string;
    isMandatory?: boolean;
}
export type ResponseWrapperYearEndReportNote = {
    value?: YearEndReportNote;
};
/**
 * Find activity by ID.
 */
export function activityGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperActivity;
    }>(`/activity/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find activities corresponding with sent data.
 */
export function activitySearch({ id, name, $number, description, isProjectActivity, isGeneral, isChargeable, isTask, isInactive, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    $number?: string;
    description?: string;
    isProjectActivity?: boolean;
    isGeneral?: boolean;
    isChargeable?: boolean;
    isTask?: boolean;
    isInactive?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivityRead;
    }>(`/activity${QS.query(QS.explode({
        id,
        name,
        "number": $number,
        description,
        isProjectActivity,
        isGeneral,
        isChargeable,
        isTask,
        isInactive,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add activity.
 */
export function activityPost(activity?: Activity, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperActivity;
    }>("/activity", oazapfts.json({
        ...opts,
        method: "POST",
        body: activity
    }));
}
/**
 * Add multiple activities.
 */
export function activityListPostList(body?: Activity[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivityRead;
    }>("/activity/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Find applicable time sheet activities for an employee on a specific day.
 */
export function activityForTimeSheetGetForTimeSheet(projectId: number, { employeeId, date, $from, count, sorting, fields }: {
    employeeId?: number;
    date?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivityRead;
    }>(`/activity/>forTimeSheet${QS.query(QS.explode({
        projectId,
        employeeId,
        date,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get address by ID.
 */
export function deliveryAddressGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeliveryAddress;
    }>(`/deliveryAddress/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update address.
 */
export function deliveryAddressPut(id: number, deliveryAddress?: DeliveryAddress, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeliveryAddress;
    }>(`/deliveryAddress/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: deliveryAddress
    }));
}
/**
 * Find addresses corresponding with sent data.
 */
export function deliveryAddressSearch({ id, addressLine1, addressLine2, postalCode, city, name, $from, count, sorting, fields }: {
    id?: string;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    name?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeliveryAddressRead;
    }>(`/deliveryAddress${QS.query(QS.explode({
        id,
        addressLine1,
        addressLine2,
        postalCode,
        city,
        name,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get asset by ID.
 */
export function assetGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAsset;
    }>(`/asset/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update asset.
 */
export function assetPut(id: number, asset?: Asset, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAsset;
    }>(`/asset/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: asset
    }));
}
/**
 * Delete asset.
 */
export function assetDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/asset/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find assets corresponding with sent data.
 */
export function assetSearch({ id, name, description, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    description?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAssetRead;
    }>(`/asset${QS.query(QS.explode({
        id,
        name,
        description,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create one asset.
 */
export function assetPost(asset?: Asset, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAsset;
    }>("/asset", oazapfts.json({
        ...opts,
        method: "POST",
        body: asset
    }));
}
/**
 * Create several assets.
 */
export function assetListPostList(body?: Asset[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAssetRead;
    }>("/asset/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Create copy of one asset
 */
export function assetDuplicatePostDuplicate(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/asset/duplicate/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * Validate delete asset
 */
export function assetCanDeleteCanDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/asset/canDelete/${encodeURIComponent(id)}`, {
        ...opts
    });
}
/**
 * [BETA] Delete most recent assets import.
 */
export function assetDeleteImportDeleteImport(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/asset/deleteImport", {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Upload Excel file with Assets in the standard Tripletex defined format.
 */
export function assetUploadUpload(isPreview: boolean, startDate: string, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAssetAccountRowRead;
    }>(`/asset/upload${QS.query(QS.explode({
        isPreview,
        startDate
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Get auth config
 */
export function internalAuthConfigGetConfig({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAuthConfigDto;
    }>(`/internal/auth/config${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get balance sheet (saldobalanse).
 */
export function balanceSheetSearch(dateFrom: string, dateTo: string, { accountNumberFrom, accountNumberTo, customerId, employeeId, departmentId, projectId, includeSubProjects, includeActiveAccountsWithoutMovements, $from, count, sorting, fields }: {
    accountNumberFrom?: number;
    accountNumberTo?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    includeSubProjects?: boolean;
    includeActiveAccountsWithoutMovements?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBalanceSheetAccountRead;
    }>(`/balanceSheet${QS.query(QS.explode({
        dateFrom,
        dateTo,
        accountNumberFrom,
        accountNumberTo,
        customerId,
        employeeId,
        departmentId,
        projectId,
        includeSubProjects,
        includeActiveAccountsWithoutMovements,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get bank.
 */
export function bankGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBank;
    }>(`/bank/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank corresponding with sent data.
 */
export function bankSearch({ id, registerNumbers, isBankReconciliationSupport, isAutoPaySupported, isZtlSupported, query, $from, count, sorting, fields }: {
    id?: string;
    registerNumbers?: string;
    isBankReconciliationSupport?: boolean;
    isAutoPaySupported?: boolean;
    isZtlSupported?: boolean;
    query?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankRead;
    }>(`/bank${QS.query(QS.explode({
        id,
        registerNumbers,
        isBankReconciliationSupport,
        isAutoPaySupported,
        isZtlSupported,
        query,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update advice.
 */
export function bankAdvicePut(id: number, bankDashboardAdvice?: BankDashboardAdvice, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankDashboardAdvice;
    }>(`/bank/advice/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bankDashboardAdvice
    }));
}
/**
 * Find advices for the company context
 */
export function bankAdviceSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankDashboardAdviceRead;
    }>(`/bank/advice${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get bank reconciliation.
 */
export function bankReconciliationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>(`/bank/reconciliation/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a bank reconciliation.
 */
export function bankReconciliationPut(id: number, bankReconciliation?: BankReconciliation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>(`/bank/reconciliation/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bankReconciliation
    }));
}
/**
 * Delete bank reconciliation by ID.
 */
export function bankReconciliationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/reconciliation/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get the last created reconciliation by account ID.
 */
export function bankReconciliationLastLast(accountId: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>(`/bank/reconciliation/>last${QS.query(QS.explode({
        accountId,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank reconciliation corresponding with sent data.
 */
export function bankReconciliationSearch({ id, accountingPeriodId, accountId, $from, count, sorting, fields }: {
    id?: string;
    accountingPeriodId?: string;
    accountId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationRead;
    }>(`/bank/reconciliation${QS.query(QS.explode({
        id,
        accountingPeriodId,
        accountId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Post a bank reconciliation.
 */
export function bankReconciliationPost(bankReconciliation?: BankReconciliation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>("/bank/reconciliation", oazapfts.json({
        ...opts,
        method: "POST",
        body: bankReconciliation
    }));
}
/**
 * Add an adjustment to reconciliation by ID.
 */
export function bankReconciliationAdjustmentAdjustment(id: number, body?: BankReconciliationAdjustment[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationAdjustmentRead;
    }>(`/bank/reconciliation/${encodeURIComponent(id)}/:adjustment`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Get last closed reconciliation by account ID.
 */
export function bankReconciliationLastClosedLastClosed(accountId: number, { after, fields }: {
    after?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>(`/bank/reconciliation/>lastClosed${QS.query(QS.explode({
        accountId,
        after,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get the last closed reconciliation with unmached transactions by account ID.
 */
export function bankReconciliationClosedWithUnmatchedTransactionsClosedWithUnmatchedTransactions(accountId: number, { start, fields }: {
    start?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>(`/bank/reconciliation/closedWithUnmatchedTransactions${QS.query(QS.explode({
        accountId,
        start,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get bank reconciliation match by ID.
 */
export function bankReconciliationMatchGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationMatch;
    }>(`/bank/reconciliation/match/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a bank reconciliation match by ID.
 */
export function bankReconciliationMatchPut(id: number, bankReconciliationMatch?: BankReconciliationMatch, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationMatch;
    }>(`/bank/reconciliation/match/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bankReconciliationMatch
    }));
}
/**
 * Delete a bank reconciliation match by ID.
 */
export function bankReconciliationMatchDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/reconciliation/match/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get the total number of matches
 */
export function bankReconciliationMatchCountCount(bankReconciliationId: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInteger;
    }>(`/bank/reconciliation/match/count${QS.query(QS.explode({
        bankReconciliationId,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [INTERNAL] Wildcard search.
 */
export function bankReconciliationMatchQueryQuery({ bankReconciliationId, approved, count, $from, sorting, fields }: {
    bankReconciliationId?: number;
    approved?: boolean;
    count?: number;
    $from?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationMatchRead;
    }>(`/bank/reconciliation/match/query${QS.query(QS.explode({
        bankReconciliationId,
        approved,
        count,
        "from": $from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank reconciliation match corresponding with sent data.
 */
export function bankReconciliationMatchSearch({ id, bankReconciliationId, count, approved, $from, sorting, fields }: {
    id?: string;
    bankReconciliationId?: string;
    count?: number;
    approved?: boolean;
    $from?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationMatchRead;
    }>(`/bank/reconciliation/match${QS.query(QS.explode({
        id,
        bankReconciliationId,
        count,
        approved,
        "from": $from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a bank reconciliation match.
 */
export function bankReconciliationMatchPost(bankReconciliationMatch?: BankReconciliationMatch, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationMatch;
    }>("/bank/reconciliation/match", oazapfts.json({
        ...opts,
        method: "POST",
        body: bankReconciliationMatch
    }));
}
/**
 * Suggest matches for a bank reconciliation by ID.
 */
export function bankReconciliationMatchSuggestSuggest(bankReconciliationId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationMatchRead;
    }>(`/bank/reconciliation/match/:suggest${QS.query(QS.explode({
        bankReconciliationId
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get number of matches since last page access.
 */
export function bankReconciliationMatchesCounterGet(bankReconciliationId: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationMatchesCounter;
    }>(`/bank/reconciliation/matches/counter${QS.query(QS.explode({
        bankReconciliationId,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Reset the number of matches after the page has been accessed.
 */
export function bankReconciliationMatchesCounterPost(bankReconciliationId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/reconciliation/matches/counter${QS.query(QS.explode({
        bankReconciliationId
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * Get payment type by ID.
 */
export function bankReconciliationPaymentTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationPaymentType;
    }>(`/bank/reconciliation/paymentType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payment type corresponding with sent data.
 */
export function bankReconciliationPaymentTypeSearch({ id, description, $from, count, sorting, fields }: {
    id?: string;
    description?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationPaymentTypeRead;
    }>(`/bank/reconciliation/paymentType${QS.query(QS.explode({
        id,
        description,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get bank reconciliation settings.
 */
export function bankReconciliationSettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationSettings;
    }>(`/bank/reconciliation/settings${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Post bank reconciliation settings.
 */
export function bankReconciliationSettingsPost(bankReconciliationSettings?: BankReconciliationSettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationSettings;
    }>("/bank/reconciliation/settings", oazapfts.json({
        ...opts,
        method: "POST",
        body: bankReconciliationSettings
    }));
}
/**
 * Update bank reconciliation settings.
 */
export function bankReconciliationSettingsPut(id: number, bankReconciliationSettings?: BankReconciliationSettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationSettings;
    }>(`/bank/reconciliation/settings/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bankReconciliationSettings
    }));
}
/**
 * Get bank statement.
 */
export function bankStatementGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankStatement;
    }>(`/bank/statement/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete bank statement by ID.
 */
export function bankStatementDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/statement/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find bank statement corresponding with sent data.
 */
export function bankStatementSearch({ id, accountId, fileFormat, $from, count, sorting, fields }: {
    id?: string;
    accountId?: string;
    fileFormat?: "DNB_CSV" | "EIKA_TELEPAY" | "SPAREBANK1_TELEPAY" | "VISMA_ACCOUNT_STATEMENT" | "HANDELSBANKEN_TELEPAY" | "SPAREBANKEN_VEST_TELEPAY" | "NORDEA_CSV" | "TRANSFERWISE" | "SPAREBANKEN_SOR_TELEPAY" | "SPAREBANKEN_OST_TELEPAY" | "DANSKE_BANK_CSV" | "CULTURA_BANK_TELEPAY" | "SBANKEN_PRIVAT_CSV" | "HAUGESUND_SPAREBANK_CSV" | "VISMA_ACCOUNT_STATEMENT_PSD2" | "SBANKEN_BEDRIFT_CSV" | "LANDKREDITT_TELEPAY" | "ZTL";
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankStatementRead;
    }>(`/bank/statement${QS.query(QS.explode({
        id,
        accountId,
        fileFormat,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Upload bank statement file.
 */
export function bankStatementImportImportBankStatement(bankId: number, accountId: number, fromDate: string, toDate: string, fileFormat: "DNB_CSV" | "EIKA_TELEPAY" | "SPAREBANK1_TELEPAY" | "VISMA_ACCOUNT_STATEMENT" | "HANDELSBANKEN_TELEPAY" | "SPAREBANKEN_VEST_TELEPAY" | "NORDEA_CSV" | "TRANSFERWISE" | "SPAREBANKEN_SOR_TELEPAY" | "SPAREBANKEN_OST_TELEPAY" | "DANSKE_BANK_CSV" | "CULTURA_BANK_TELEPAY" | "SBANKEN_PRIVAT_CSV" | "HAUGESUND_SPAREBANK_CSV" | "VISMA_ACCOUNT_STATEMENT_PSD2" | "SBANKEN_BEDRIFT_CSV" | "LANDKREDITT_TELEPAY" | "ZTL", body: {
    file: Blob;
}, { externalId }: {
    externalId?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankStatement;
    }>(`/bank/statement/import${QS.query(QS.explode({
        bankId,
        accountId,
        fromDate,
        toDate,
        externalId,
        fileFormat
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Get bank transaction by ID.
 */
export function bankStatementTransactionGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankTransaction;
    }>(`/bank/statement/transaction/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank transaction corresponding with sent data.
 */
export function bankStatementTransactionSearch(bankStatementId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankTransactionRead;
    }>(`/bank/statement/transaction${QS.query(QS.explode({
        bankStatementId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get additional details about transaction by ID.
 */
export function bankStatementTransactionDetailsGetDetails(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperObject;
    }>(`/bank/statement/transaction/${encodeURIComponent(id)}/details${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Check if any of the employee ids requires level 4 authorizations to make changes
 */
export function accountantClientAccessRequiresLevel4AuthorizationGetRequiresLevel4Authorization({ customerIds, employeeIds, fields }: {
    customerIds?: string;
    employeeIds?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBoolean;
    }>(`/accountantClientAccess/requiresLevel4Authorization${QS.query(QS.explode({
        customerIds,
        employeeIds,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get consumer token by token string.
 */
export function tokenConsumerByTokenGetByToken(token: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperConsumerToken;
    }>(`/token/consumer/byToken${QS.query(QS.explode({
        token,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create an employee token. Only selected consumers are allowed
 */
export function tokenEmployeeCreateCreate(tokenName: string, consumerName: string, employeeId: number, companyOwned: boolean, expirationDate: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeToken;
    }>(`/token/employee/:create${QS.query(QS.explode({
        tokenName,
        consumerName,
        employeeId,
        companyOwned,
        expirationDate
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Delete session token.
 */
export function tokenSessionDelete(token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/token/session/${encodeURIComponent(token)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create session token.
 */
export function tokenSessionCreateCreate(consumerToken: string, employeeToken: string, expirationDate: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSessionToken;
    }>(`/token/session/:create${QS.query(QS.explode({
        consumerToken,
        employeeToken,
        expirationDate
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find information about the current user.
 */
export function tokenSessionWhoAmIWhoAmI({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLoggedInUserInfoDto;
    }>(`/token/session/>whoAmI${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
 */
export function companyWithLoginAccessGetWithLoginAccess({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseClientRead;
    }>(`/company/>withLoginAccess${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find company by ID.
 */
export function companyGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompany;
    }>(`/company/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update company information.
 */
export function companyPut(company?: Company, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompany;
    }>("/company", oazapfts.json({
        ...opts,
        method: "PUT",
        body: company
    }));
}
/**
 * [DEPRECATED] Find divisions.
 */
export function companyDivisionsGetDivisions({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyRead;
    }>(`/company/divisions${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find Altinn id for login in company.
 */
export function companySettingsAltinnSearch({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAltinnCompanyModule;
    }>(`/company/settings/altinn${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update AltInn id and password.
 */
export function companySettingsAltinnPut(altinnCompanyModule?: AltinnCompanyModule, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAltinnCompanyModule;
    }>("/company/settings/altinn", oazapfts.json({
        ...opts,
        method: "PUT",
        body: altinnCompanyModule
    }));
}
/**
 * [BETA] Get active sales modules.
 */
export function companySalesmodulesGet({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSalesModuleDtoRead;
    }>(`/company/salesmodules${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add (activate) a new sales module.
 */
export function companySalesmodulesPost(salesModuleDto?: SalesModuleDto, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalesModuleDto;
    }>("/company/salesmodules", oazapfts.json({
        ...opts,
        method: "POST",
        body: salesModuleDto
    }));
}
/**
 * Get contact by ID.
 */
export function contactGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperContact;
    }>(`/contact/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update contact.
 */
export function contactPut(id: number, contact?: Contact, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperContact;
    }>(`/contact/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: contact
    }));
}
/**
 * Find contacts corresponding with sent data.
 */
export function contactSearch({ id, firstName, lastName, email, customerId, departmentId, $from, count, sorting, fields }: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    customerId?: string;
    departmentId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseContactRead;
    }>(`/contact${QS.query(QS.explode({
        id,
        firstName,
        lastName,
        email,
        customerId,
        departmentId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create contact.
 */
export function contactPost(contact?: Contact, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperContact;
    }>("/contact", oazapfts.json({
        ...opts,
        method: "POST",
        body: contact
    }));
}
/**
 * [BETA] Delete multiple contacts.
 */
export function contactListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/contact/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get country by ID.
 */
export function countryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCountry;
    }>(`/country/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find countries corresponding with sent data.
 */
export function countrySearch({ id, code, isDisabled, $from, count, sorting, fields }: {
    id?: string;
    code?: string;
    isDisabled?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCountryRead;
    }>(`/country${QS.query(QS.explode({
        id,
        code,
        isDisabled,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get currency by ID.
 */
export function currencyGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCurrency;
    }>(`/currency/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find currencies corresponding with sent data.
 */
export function currencySearch({ id, code, $from, count, sorting, fields }: {
    id?: string;
    code?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCurrencyRead;
    }>(`/currency${QS.query(QS.explode({
        id,
        code,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find currency exchange rate corresponding with sent data.
 */
export function currencyRateGetRate(id: number, date: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCurrencyExchangeRate;
    }>(`/currency/${encodeURIComponent(id)}/rate${QS.query(QS.explode({
        date,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get customer by ID.
 */
export function customerGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomer;
    }>(`/customer/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update customer.
 */
export function customerPut(id: number, customer?: Customer, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomer;
    }>(`/customer/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: customer
    }));
}
/**
 * [BETA] Delete customer by ID
 */
export function customerDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/customer/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find customers corresponding with sent data.
 */
export function customerSearch({ id, customerAccountNumber, organizationNumber, email, invoiceEmail, isInactive, accountManagerId, changedSince, $from, count, sorting, fields }: {
    id?: string;
    customerAccountNumber?: string;
    organizationNumber?: string;
    email?: string;
    invoiceEmail?: string;
    isInactive?: boolean;
    accountManagerId?: string;
    changedSince?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomerRead;
    }>(`/customer${QS.query(QS.explode({
        id,
        customerAccountNumber,
        organizationNumber,
        email,
        invoiceEmail,
        isInactive,
        accountManagerId,
        changedSince,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create customer. Related customer addresses may also be created.
 */
export function customerPost(customer?: Customer, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomer;
    }>("/customer", oazapfts.json({
        ...opts,
        method: "POST",
        body: customer
    }));
}
/**
 * [BETA] Create multiple customers. Related supplier addresses may also be created.
 */
export function customerListPostList(body?: Customer[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomerRead;
    }>("/customer/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple customers. Addresses can also be updated.
 */
export function customerListPutList(body?: Customer[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomerRead;
    }>("/customer/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Find customer/supplier category by ID.
 */
export function customerCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomerCategory;
    }>(`/customer/category/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update customer/supplier category.
 */
export function customerCategoryPut(id: number, customerCategory?: CustomerCategory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomerCategory;
    }>(`/customer/category/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: customerCategory
    }));
}
/**
 * Find customer/supplier categories corresponding with sent data.
 */
export function customerCategorySearch({ id, name, $number, description, $type, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    $number?: string;
    description?: string;
    $type?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomerCategoryRead;
    }>(`/customer/category${QS.query(QS.explode({
        id,
        name,
        "number": $number,
        description,
        "type": $type,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new customer/supplier category.
 */
export function customerCategoryPost(customerCategory?: CustomerCategory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomerCategory;
    }>("/customer/category", oazapfts.json({
        ...opts,
        method: "POST",
        body: customerCategory
    }));
}
/**
 * Get department by ID.
 */
export function departmentGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDepartment;
    }>(`/department/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update department.
 */
export function departmentPut(id: number, department?: Department, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDepartment;
    }>(`/department/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: department
    }));
}
/**
 * Delete department by ID
 */
export function departmentDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/department/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Wildcard search.
 */
export function departmentQueryQuery({ id, query, count, fields, isInactive, $from, sorting }: {
    id?: string;
    query?: string;
    count?: number;
    fields?: string;
    isInactive?: boolean;
    $from?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartmentRead;
    }>(`/department/query${QS.query(QS.explode({
        id,
        query,
        count,
        fields,
        isInactive,
        "from": $from,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * Find department corresponding with sent data.
 */
export function departmentSearch({ id, name, departmentNumber, departmentManagerId, isInactive, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    departmentNumber?: string;
    departmentManagerId?: string;
    isInactive?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartmentRead;
    }>(`/department${QS.query(QS.explode({
        id,
        name,
        departmentNumber,
        departmentManagerId,
        isInactive,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new department.
 */
export function departmentPost(department?: Department, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDepartment;
    }>("/department", oazapfts.json({
        ...opts,
        method: "POST",
        body: department
    }));
}
/**
 * Register new departments.
 */
export function departmentListPostList(body?: Department[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartmentRead;
    }>("/department/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple departments.
 */
export function departmentListPutList(body?: Department[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartmentRead;
    }>("/department/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Update division information.
 */
export function divisionPut(id: number, division?: Division, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDivision;
    }>(`/division/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: division
    }));
}
/**
 * Get divisions.
 */
export function divisionSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDivisionRead;
    }>(`/division${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create division.
 */
export function divisionPost(division?: Division, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDivision;
    }>("/division", oazapfts.json({
        ...opts,
        method: "POST",
        body: division
    }));
}
/**
 * Create divisions.
 */
export function divisionListPostList(body?: Division[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDivisionRead;
    }>("/division/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple divisions.
 */
export function divisionListPutList(body?: Division[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDivisionRead;
    }>("/division/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Get document by ID.
 */
export function documentGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocument;
    }>(`/document/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get content of document given by ID.
 */
export function documentContentDownloadContent(id: number, { download }: {
    download?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/document/${encodeURIComponent(id)}/content${QS.query(QS.explode({
        download
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update document archive.
 */
export function documentArchivePut(id: number, documentArchive?: DocumentArchive, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: documentArchive
    }));
}
/**
 * [BETA] Delete document archive.
 */
export function documentArchiveDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/documentArchive/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Upload a file to the document archive reception. Send as multipart form.
 */
export function documentArchiveReceptionReceptionPost(body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>("/documentArchive/reception", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with project object type.
 */
export function documentArchiveProjectGetProject(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/project/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Project Document Archive.
 */
export function documentArchiveProjectProjectPost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/project/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with customer object type.
 */
export function documentArchiveCustomerGetCustomer(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/customer/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Customer Document Archive.
 */
export function documentArchiveCustomerCustomerPost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/customer/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with supplier object type.
 */
export function documentArchiveSupplierGetSupplier(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/supplier/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Supplier Document Archive.
 */
export function documentArchiveSupplierSupplierPost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/supplier/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with employee object type.
 */
export function documentArchiveEmployeeGetEmployee(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/employee/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Employee Document Archive.
 */
export function documentArchiveEmployeeEmployeePost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/employee/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with product object type.
 */
export function documentArchiveProductGetProduct(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/product/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Product Document Archive.
 */
export function documentArchiveProductProductPost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/product/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with account object type.
 */
export function documentArchiveAccountGetAccount(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/account/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Account Document Archive.
 */
export function documentArchiveAccountAccountPost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/account/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with prospect object type.
 */
export function documentArchiveProspectGetProspect(id: number, { periodDateFrom, periodDateTo, $from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchiveRead;
    }>(`/documentArchive/prospect/${encodeURIComponent(id)}${QS.query(QS.explode({
        periodDateFrom,
        periodDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload file to Prospect Document Archive.
 */
export function documentArchiveProspectProspectPost(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/prospect/${encodeURIComponent(id)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Get employee by ID.
 */
export function employeeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployee;
    }>(`/employee/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update employee.
 */
export function employeePut(id: number, employee?: Employee, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployee;
    }>(`/employee/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: employee
    }));
}
/**
 * Find employees corresponding with sent data.
 */
export function employeeSearch({ id, firstName, lastName, employeeNumber, email, allowInformationRegistration, includeContacts, departmentId, onlyProjectManagers, onlyContacts, assignableProjectManagers, periodStart, periodEnd, hasSystemAccess, $from, count, sorting, fields }: {
    id?: string;
    firstName?: string;
    lastName?: string;
    employeeNumber?: string;
    email?: string;
    allowInformationRegistration?: boolean;
    includeContacts?: boolean;
    departmentId?: string;
    onlyProjectManagers?: boolean;
    onlyContacts?: boolean;
    assignableProjectManagers?: boolean;
    periodStart?: string;
    periodEnd?: string;
    hasSystemAccess?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeRead;
    }>(`/employee${QS.query(QS.explode({
        id,
        firstName,
        lastName,
        employeeNumber,
        email,
        allowInformationRegistration,
        includeContacts,
        departmentId,
        onlyProjectManagers,
        onlyContacts,
        assignableProjectManagers,
        periodStart,
        periodEnd,
        hasSystemAccess,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create one employee.
 */
export function employeePost(employee?: Employee, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployee;
    }>("/employee", oazapfts.json({
        ...opts,
        method: "POST",
        body: employee
    }));
}
/**
 * Create several employees.
 */
export function employeeListPostList(body?: Employee[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeRead;
    }>("/employee/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Get employees and contacts by parameters. Include contacts by default.
 */
export function employeeSearchForEmployeesAndContactsSearchForEmployeesAndContacts({ id, firstName, lastName, email, includeContacts, fields, $from, count, sorting }: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    includeContacts?: boolean;
    fields?: string;
    $from?: number;
    count?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeRead;
    }>(`/employee/searchForEmployeesAndContacts${QS.query(QS.explode({
        id,
        firstName,
        lastName,
        email,
        includeContacts,
        fields,
        "from": $from,
        count,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * Get employee category by ID.
 */
export function employeeCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeCategory;
    }>(`/employee/category/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update employee category information.
 */
export function employeeCategoryPut(id: number, employeeCategory?: EmployeeCategory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeCategory;
    }>(`/employee/category/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: employeeCategory
    }));
}
/**
 * Delete employee category by ID
 */
export function employeeCategoryDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/employee/category/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find employee category corresponding with sent data.
 */
export function employeeCategorySearch({ id, name, $number, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    $number?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeCategoryRead;
    }>(`/employee/category${QS.query(QS.explode({
        id,
        name,
        "number": $number,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a new employee category.
 */
export function employeeCategoryPost(employeeCategory?: EmployeeCategory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeCategory;
    }>("/employee/category", oazapfts.json({
        ...opts,
        method: "POST",
        body: employeeCategory
    }));
}
/**
 * Create new employee categories.
 */
export function employeeCategoryListPostList(body?: EmployeeCategory[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeCategoryRead;
    }>("/employee/category/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple employee categories.
 */
export function employeeCategoryListPutList(body?: EmployeeCategory[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeCategoryRead;
    }>("/employee/category/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete multiple employee categories
 */
export function employeeCategoryListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/employee/category/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find employment by ID.
 */
export function employeeEmploymentGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployment;
    }>(`/employee/employment/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update employemnt.
 */
export function employeeEmploymentPut(id: number, employment?: Employment, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployment;
    }>(`/employee/employment/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: employment
    }));
}
/**
 * Find all employments for employee.
 */
export function employeeEmploymentSearch({ employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentRead;
    }>(`/employee/employment${QS.query(QS.explode({
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create employment.
 */
export function employeeEmploymentPost(employment?: Employment, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployment;
    }>("/employee/employment", oazapfts.json({
        ...opts,
        method: "POST",
        body: employment
    }));
}
/**
 * Find employment details by ID.
 */
export function employeeEmploymentDetailsGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmploymentDetails;
    }>(`/employee/employment/details/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update employment details.
 */
export function employeeEmploymentDetailsPut(id: number, employmentDetails?: EmploymentDetails, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmploymentDetails;
    }>(`/employee/employment/details/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: employmentDetails
    }));
}
/**
 * Find all employmentdetails for employment.
 */
export function employeeEmploymentDetailsSearch({ employmentId, $from, count, sorting, fields }: {
    employmentId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentDetailsRead;
    }>(`/employee/employment/details${QS.query(QS.explode({
        employmentId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create employment details.
 */
export function employeeEmploymentDetailsPost(employmentDetails?: EmploymentDetails, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmploymentDetails;
    }>("/employee/employment/details", oazapfts.json({
        ...opts,
        method: "POST",
        body: employmentDetails
    }));
}
/**
 * Find all employment type IDs.
 */
export function employeeEmploymentEmploymentTypeSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentTypeRead;
    }>(`/employee/employment/employmentType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all maritime employment type IDs.
 */
export function employeeEmploymentEmploymentTypeMaritimeEmploymentTypeGetMaritimeEmploymentType($type: "SHIP_REGISTER" | "SHIP_TYPE" | "TRADE_AREA", { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentTypeRead;
    }>(`/employee/employment/employmentType/maritimeEmploymentType${QS.query(QS.explode({
        "type": $type,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all salary type IDs.
 */
export function employeeEmploymentEmploymentTypeSalaryTypeGetSalaryType({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentTypeRead;
    }>(`/employee/employment/employmentType/salaryType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all schedule type IDs.
 */
export function employeeEmploymentEmploymentTypeScheduleTypeGetScheduleType({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentTypeRead;
    }>(`/employee/employment/employmentType/scheduleType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all employment form type IDs.
 */
export function employeeEmploymentEmploymentTypeEmploymentFormTypeGetEmploymentFormType({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentTypeRead;
    }>(`/employee/employment/employmentType/employmentFormType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all employment end reason type IDs.
 */
export function employeeEmploymentEmploymentTypeEmploymentEndReasonTypeGetEmploymentEndReasonType({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentTypeRead;
    }>(`/employee/employment/employmentType/employmentEndReasonType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find leave of absence by ID.
 */
export function employeeEmploymentLeaveOfAbsenceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLeaveOfAbsence;
    }>(`/employee/employment/leaveOfAbsence/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update leave of absence.
 */
export function employeeEmploymentLeaveOfAbsencePut(id: number, leaveOfAbsence?: LeaveOfAbsence, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLeaveOfAbsence;
    }>(`/employee/employment/leaveOfAbsence/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: leaveOfAbsence
    }));
}
/**
 * Find all leave of absence corresponding with the sent data.
 */
export function employeeEmploymentLeaveOfAbsenceSearch({ employmentIds, date, minPercentage, maxPercentage, $from, count, sorting, fields }: {
    employmentIds?: string;
    date?: string;
    minPercentage?: number;
    maxPercentage?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLeaveOfAbsenceRead;
    }>(`/employee/employment/leaveOfAbsence${QS.query(QS.explode({
        employmentIds,
        date,
        minPercentage,
        maxPercentage,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create leave of absence.
 */
export function employeeEmploymentLeaveOfAbsencePost(leaveOfAbsence?: LeaveOfAbsence, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLeaveOfAbsence;
    }>("/employee/employment/leaveOfAbsence", oazapfts.json({
        ...opts,
        method: "POST",
        body: leaveOfAbsence
    }));
}
/**
 * Create multiple leave of absences.
 */
export function employeeEmploymentLeaveOfAbsenceListPostList(body?: LeaveOfAbsence[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLeaveOfAbsenceRead;
    }>("/employee/employment/leaveOfAbsence/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Find all leave of absence type IDs.
 */
export function employeeEmploymentLeaveOfAbsenceTypeSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLeaveOfAbsenceTypeRead;
    }>(`/employee/employment/leaveOfAbsenceType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get occupation by ID.
 */
export function employeeEmploymentOccupationCodeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOccupationCode;
    }>(`/employee/employment/occupationCode/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all profession codes.
 */
export function employeeEmploymentOccupationCodeSearch({ id, nameNo, code, $from, count, sorting, fields }: {
    id?: string;
    nameNo?: string;
    code?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOccupationCodeRead;
    }>(`/employee/employment/occupationCode${QS.query(QS.explode({
        id,
        nameNO: nameNo,
        code,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all remuneration type IDs.
 */
export function employeeEmploymentRemunerationTypeSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseRemunerationTypeRead;
    }>(`/employee/employment/remunerationType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find working hours scheme ID.
 */
export function employeeEmploymentWorkingHoursSchemeSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseWorkingHoursSchemeRead;
    }>(`/employee/employment/workingHoursScheme${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find hourly cost and rate by ID.
 */
export function employeeHourlyCostAndRateGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperHourlyCostAndRate;
    }>(`/employee/hourlyCostAndRate/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update hourly cost and rate.
 */
export function employeeHourlyCostAndRatePut(id: number, hourlyCostAndRate?: HourlyCostAndRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperHourlyCostAndRate;
    }>(`/employee/hourlyCostAndRate/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: hourlyCostAndRate
    }));
}
/**
 * Find all hourly cost and rates for employee.
 */
export function employeeHourlyCostAndRateSearch({ employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseHourlyCostAndRateRead;
    }>(`/employee/hourlyCostAndRate${QS.query(QS.explode({
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create hourly cost and rate.
 */
export function employeeHourlyCostAndRatePost(hourlyCostAndRate?: HourlyCostAndRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperHourlyCostAndRate;
    }>("/employee/hourlyCostAndRate", oazapfts.json({
        ...opts,
        method: "POST",
        body: hourlyCostAndRate
    }));
}
/**
 * [BETA] Get employee login info.
 */
export function employeeLogininfoGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeLoginInfo;
    }>(`/employee/logininfo/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find next of kin by ID.
 */
export function employeeNextOfKinGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperNextOfKin;
    }>(`/employee/nextOfKin/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update next of kin.
 */
export function employeeNextOfKinPut(id: number, nextOfKin?: NextOfKin, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperNextOfKin;
    }>(`/employee/nextOfKin/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: nextOfKin
    }));
}
/**
 * Find all next of kin for employee.
 */
export function employeeNextOfKinSearch({ employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseNextOfKinRead;
    }>(`/employee/nextOfKin${QS.query(QS.explode({
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create next of kin.
 */
export function employeeNextOfKinPost(nextOfKin?: NextOfKin, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperNextOfKin;
    }>("/employee/nextOfKin", oazapfts.json({
        ...opts,
        method: "POST",
        body: nextOfKin
    }));
}
/**
 * Update employee preferences information.
 */
export function employeePreferencesPut(id: number, employeePreferences?: EmployeePreferences, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeePreferences;
    }>(`/employee/preferences/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: employeePreferences
    }));
}
/**
 * Find employee preferences corresponding with sent data.
 */
export function employeePreferencesSearch({ id, employeeId, fields }: {
    id?: string;
    employeeId?: number;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeePreferences;
    }>(`/employee/preferences${QS.query(QS.explode({
        id,
        employeeId,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update multiple employee preferences.
 */
export function employeePreferencesListPutList(body?: EmployeePreferences[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeePreferencesRead;
    }>("/employee/preferences/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Get employee preferences for current user
 */
export function employeePreferencesLoggedInEmployeePreferencesLoggedInEmployeePreferences({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeePreferences;
    }>(`/employee/preferences/>loggedInEmployeePreferences${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find standard time by ID.
 */
export function employeeStandardTimeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStandardTime;
    }>(`/employee/standardTime/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update standard time.
 */
export function employeeStandardTimePut(id: number, standardTime?: StandardTime, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStandardTime;
    }>(`/employee/standardTime/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: standardTime
    }));
}
/**
 * Find all standard times for employee.
 */
export function employeeStandardTimeSearch({ employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseStandardTimeRead;
    }>(`/employee/standardTime${QS.query(QS.explode({
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create standard time.
 */
export function employeeStandardTimePost(standardTime?: StandardTime, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStandardTime;
    }>("/employee/standardTime", oazapfts.json({
        ...opts,
        method: "POST",
        body: standardTime
    }));
}
/**
 * Find standard time for employee by date.
 */
export function employeeStandardTimeByDateGetByDate({ employeeId, date, fields }: {
    employeeId?: number;
    date?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStandardTime;
    }>(`/employee/standardTime/byDate${QS.query(QS.explode({
        employeeId,
        date,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get entitlement by ID.
 */
export function employeeEntitlementGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEntitlement;
    }>(`/employee/entitlement/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all entitlements for user.
 */
export function employeeEntitlementSearch({ employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEntitlementRead;
    }>(`/employee/entitlement${QS.query(QS.explode({
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update employee entitlements in client account.
 */
export function employeeEntitlementGrantClientEntitlementsByTemplateGrantClientEntitlementsByTemplate(employeeId: number, customerId: number, template: "NONE_PRIVILEGES" | "STANDARD_PRIVILEGES_ACCOUNTANT" | "STANDARD_PRIVILEGES_AUDITOR" | "ALL_PRIVILEGES" | "AGRO_READ_ONLY" | "AGRO_READ_APPROVE" | "AGRO_READ_WRITE" | "AGRO_READ_WRITE_APPROVE" | "MAMUT_PAYROLL_ADMIN" | "MAMUT_PAYROLL_CLERK" | "AGRO_PAYROLL_ADMIN" | "AGRO_PAYROLL_CLERK" | "AGRO_INVOICE_ADMIN" | "AGRO_INVOICE_CLERK", { addToExisting }: {
    addToExisting?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/employee/entitlement/:grantClientEntitlementsByTemplate${QS.query(QS.explode({
        employeeId,
        customerId,
        template,
        addToExisting
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Update employee entitlements.
 */
export function employeeEntitlementGrantEntitlementsByTemplateGrantEntitlementsByTemplate(employeeId: number, template: "NONE_PRIVILEGES" | "ALL_PRIVILEGES" | "INVOICING_MANAGER" | "PERSONELL_MANAGER" | "ACCOUNTANT" | "AUDITOR" | "DEPARTMENT_LEADER" | "MAMUT_USER_ADMIN" | "MAMUT_USER", opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/employee/entitlement/:grantEntitlementsByTemplate${QS.query(QS.explode({
        employeeId,
        template
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Find all entitlements at client for user.
 */
export function employeeEntitlementClientClient({ employeeId, customerId, $from, count, sorting, fields }: {
    employeeId?: number;
    customerId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEntitlementRead;
    }>(`/employee/entitlement/client${QS.query(QS.explode({
        employeeId,
        customerId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get all (WebHook) event keys.
 */
export function eventGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMapStringEventInfoDescription;
    }>(`/event${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get example webhook payload
 */
export function eventExample(eventType: string, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEventInfoDto;
    }>(`/event/${encodeURIComponent(eventType)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get subscription by ID.
 */
export function eventSubscriptionGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSubscription;
    }>(`/event/subscription/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Change a current subscription, based on id.
 */
export function eventSubscriptionPut(id: number, subscription?: Subscription, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSubscription;
    }>(`/event/subscription/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: subscription
    }));
}
/**
 * [BETA] Delete the given subscription.
 */
export function eventSubscriptionDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/event/subscription/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find all ongoing subscriptions.
 */
export function eventSubscriptionSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSubscriptionRead;
    }>(`/event/subscription${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a new subscription for current EmployeeToken.
 */
export function eventSubscriptionPost(subscription?: Subscription, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSubscription;
    }>("/event/subscription", oazapfts.json({
        ...opts,
        method: "POST",
        body: subscription
    }));
}
/**
 * [BETA] Create multiple subscriptions for current EmployeeToken.
 */
export function eventSubscriptionListPostList(body?: Subscription[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSubscriptionRead;
    }>("/event/subscription/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple subscription.
 */
export function eventSubscriptionListPutList(body?: Subscription[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSubscriptionRead;
    }>("/event/subscription/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Delete multiple subscriptions.
 */
export function eventSubscriptionListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/event/subscription/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get inventory by ID.
 */
export function inventoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventory;
    }>(`/inventory/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update inventory.
 */
export function inventoryPut(id: number, inventory?: Inventory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventory;
    }>(`/inventory/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: inventory
    }));
}
/**
 * [BETA] Delete inventory.
 */
export function inventoryDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find inventory corresponding with sent data.
 */
export function inventorySearch({ id, name, isMainInventory, isInactive, query, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    isMainInventory?: boolean;
    isInactive?: boolean;
    query?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoryRead;
    }>(`/inventory${QS.query(QS.explode({
        id,
        name,
        isMainInventory,
        isInactive,
        query,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create new inventory.
 */
export function inventoryPost(inventory?: Inventory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventory;
    }>("/inventory", oazapfts.json({
        ...opts,
        method: "POST",
        body: inventory
    }));
}
/**
 * [BETA] Find inventories corresponding with sent data.
 */
export function inventoryInventoriesSearch(dateFrom: string, dateTo: string, { productId, inventoryId, onlyProductWithChangedStatus, $from, count, sorting, fields }: {
    productId?: number;
    inventoryId?: number;
    onlyProductWithChangedStatus?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoriesRead;
    }>(`/inventory/inventories${QS.query(QS.explode({
        dateFrom,
        dateTo,
        productId,
        inventoryId,
        onlyProductWithChangedStatus,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get inventory location by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventoryLocation;
    }>(`/inventory/location/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationPut(id: number, inventoryLocation?: InventoryLocation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventoryLocation;
    }>(`/inventory/location/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: inventoryLocation
    }));
}
/**
 * [BETA] Delete inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/location/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find inventory locations by inventory ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationSearch({ warehouseId, isInactive, name, $from, count, sorting, fields }: {
    warehouseId?: string;
    isInactive?: boolean;
    name?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoryLocationRead;
    }>(`/inventory/location${QS.query(QS.explode({
        warehouseId,
        isInactive,
        name,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationPost(inventoryLocation?: InventoryLocation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventoryLocation;
    }>("/inventory/location", oazapfts.json({
        ...opts,
        method: "POST",
        body: inventoryLocation
    }));
}
/**
 * [BETA] Add multiple inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationListPostList(body?: InventoryLocation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoryLocationRead;
    }>("/inventory/location/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationListPutList(body?: InventoryLocation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoryLocationRead;
    }>("/inventory/location/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Delete inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/location/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get stocktaking by ID.
 */
export function inventoryStocktakingGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStocktaking;
    }>(`/inventory/stocktaking/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update stocktaking.
 */
export function inventoryStocktakingPut(id: number, stocktaking?: Stocktaking, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStocktaking;
    }>(`/inventory/stocktaking/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: stocktaking
    }));
}
/**
 * [BETA] Delete stocktaking.
 */
export function inventoryStocktakingDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/stocktaking/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find stocktaking corresponding with sent data.
 */
export function inventoryStocktakingSearch({ id, isCompleted, inventoryId, $from, count, sorting, fields }: {
    id?: string;
    isCompleted?: boolean;
    inventoryId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseStocktakingRead;
    }>(`/inventory/stocktaking${QS.query(QS.explode({
        id,
        isCompleted,
        inventoryId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new stocktaking.
 */
export function inventoryStocktakingPost(stocktaking?: Stocktaking, { typeOfStocktaking }: {
    typeOfStocktaking?: "ALL_PRODUCTS_WITH_INVENTORIES" | "INCLUDE_PRODUCTS" | "NO_PRODUCTS";
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStocktaking;
    }>(`/inventory/stocktaking${QS.query(QS.explode({
        typeOfStocktaking
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: stocktaking
    }));
}
/**
 * [BETA] Get product line by ID.
 */
export function inventoryStocktakingProductlineGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductLine;
    }>(`/inventory/stocktaking/productline/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product line.
 */
export function inventoryStocktakingProductlinePut(id: number, productLine?: ProductLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductLine;
    }>(`/inventory/stocktaking/productline/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: productLine
    }));
}
/**
 * [BETA] Delete product line.
 */
export function inventoryStocktakingProductlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/stocktaking/productline/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find all product lines by stocktaking ID.
 */
export function inventoryStocktakingProductlineSearch(stocktakingId: number, { query, productGroupIds, locationIds, productLineStatus, count, $from, sorting, fields }: {
    query?: string;
    productGroupIds?: string;
    locationIds?: string;
    productLineStatus?: "ALL_PRODUCTS" | "COUNTED_PRODUCTS" | "NOT_COUNTED_PRODUCTS";
    count?: number;
    $from?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductLineRead;
    }>(`/inventory/stocktaking/productline${QS.query(QS.explode({
        stocktakingId,
        query,
        productGroupIds,
        locationIds,
        productLineStatus,
        count,
        "from": $from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create product line. When creating several product lines, use /list for better performance.
 */
export function inventoryStocktakingProductlinePost(productLine?: ProductLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductLine;
    }>("/inventory/stocktaking/productline", oazapfts.json({
        ...opts,
        method: "POST",
        body: productLine
    }));
}
/**
 * Get invoice by ID.
 */
export function invoiceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/invoice/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find invoices corresponding with sent data. Includes charged outgoing invoices only.
 */
export function invoiceSearch(invoiceDateFrom: string, invoiceDateTo: string, { id, invoiceNumber, kid, voucherId, customerId, $from, count, sorting, fields }: {
    id?: string;
    invoiceNumber?: string;
    kid?: string;
    voucherId?: string;
    customerId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInvoiceRead;
    }>(`/invoice${QS.query(QS.explode({
        id,
        invoiceDateFrom,
        invoiceDateTo,
        invoiceNumber,
        kid,
        voucherId,
        customerId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create invoice. Related Order and OrderLines can be created first, or included as new objects inside the Invoice.
 */
export function invoicePost(invoice?: Invoice, { sendToCustomer, paymentTypeId, paidAmount }: {
    sendToCustomer?: boolean;
    paymentTypeId?: number;
    paidAmount?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/invoice${QS.query(QS.explode({
        sendToCustomer,
        paymentTypeId,
        paidAmount
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: invoice
    }));
}
/**
 * [BETA] Create multiple invoices. Max 100 at a time.
 */
export function invoiceListPostList(body?: Invoice[], { sendToCustomer, fields }: {
    sendToCustomer?: boolean;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInvoiceRead;
    }>(`/invoice/list${QS.query(QS.explode({
        sendToCustomer,
        fields
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Send invoice by ID and sendType. Optionally override email recipient.
 */
export function invoiceSendSend(id: number, sendType: "EMAIL" | "EHF" | "AVTALEGIRO" | "EFAKTURA" | "VIPPS" | "PAPER" | "MANUAL", { overrideEmailAddress }: {
    overrideEmailAddress?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/invoice/${encodeURIComponent(id)}/:send${QS.query(QS.explode({
        sendType,
        overrideEmailAddress
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get invoice document by invoice ID.
 */
export function invoicePdfDownloadPdf(invoiceId: number, { download }: {
    download?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/invoice/${encodeURIComponent(invoiceId)}/pdf${QS.query(QS.explode({
        download
    }))}`, {
        ...opts
    });
}
/**
 * Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
 */
export function invoicePaymentPayment(id: number, paymentDate: string, paymentTypeId: number, paidAmount: number, { paidAmountCurrency }: {
    paidAmountCurrency?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/invoice/${encodeURIComponent(id)}/:payment${QS.query(QS.explode({
        paymentDate,
        paymentTypeId,
        paidAmount,
        paidAmountCurrency
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Creates a new Invoice representing a credit memo that nullifies the given invoice. Updates this invoice and any pre-existing inverse invoice.
 */
export function invoiceCreateCreditNoteCreateCreditNote(id: number, date: string, { comment, creditNoteEmail, sendToCustomer }: {
    comment?: string;
    creditNoteEmail?: string;
    sendToCustomer?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/invoice/${encodeURIComponent(id)}/:createCreditNote${QS.query(QS.explode({
        date,
        comment,
        creditNoteEmail,
        sendToCustomer
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Create invoice reminder and sends it by the given dispatch type. Supports the reminder types SOFT_REMINDER, REMINDER and NOTICE_OF_DEBT_COLLECTION. DispatchType NETS_PRINT must have type NOTICE_OF_DEBT_COLLECTION. SMS and NETS_PRINT must be activated prior to usage in the API.
 */
export function invoiceCreateReminderCreateReminder(id: number, $type: "SOFT_REMINDER" | "REMINDER" | "NOTICE_OF_DEBT_COLLECTION" | "DEBT_COLLECTION", date: string, dispatchType: "NETS_PRINT" | "EMAIL" | "SMS", { includeCharge, includeInterest, smsNumber }: {
    includeCharge?: boolean;
    includeInterest?: boolean;
    smsNumber?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/invoice/${encodeURIComponent(id)}/:createReminder${QS.query(QS.explode({
        "type": $type,
        date,
        includeCharge,
        includeInterest,
        dispatchType,
        smsNumber
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get invoice remark by ID.
 */
export function invoiceRemarkGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoiceRemark;
    }>(`/invoiceRemark/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get payment type by ID.
 */
export function invoicePaymentTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPaymentType;
    }>(`/invoice/paymentType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payment type corresponding with sent data.
 */
export function invoicePaymentTypeSearch({ id, description, query, $from, count, sorting, fields }: {
    id?: string;
    description?: string;
    query?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentTypeRead;
    }>(`/invoice/paymentType${QS.query(QS.explode({
        id,
        description,
        query,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get ProjectInvoiceDetails by ID.
 */
export function invoiceDetailsGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectInvoiceDetails;
    }>(`/invoice/details/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find ProjectInvoiceDetails corresponding with sent data.
 */
export function invoiceDetailsSearch(invoiceDateFrom: string, invoiceDateTo: string, { id, $from, count, sorting, fields }: {
    id?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectInvoiceDetailsRead;
    }>(`/invoice/details${QS.query(QS.explode({
        id,
        invoiceDateFrom,
        invoiceDateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get ledger (hovedbok).
 */
export function ledgerSearch(dateFrom: string, dateTo: string, { openPostings, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, $from, count, sorting, fields }: {
    openPostings?: string;
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLedgerAccountRead;
    }>(`/ledger${QS.query(QS.explode({
        dateFrom,
        dateTo,
        openPostings,
        accountId,
        supplierId,
        customerId,
        employeeId,
        departmentId,
        projectId,
        productId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find open posts corresponding with sent data.
 */
export function ledgerOpenPostOpenPost(date: string, { accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, $from, count, sorting, fields }: {
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLedgerAccountRead;
    }>(`/ledger/openPost${QS.query(QS.explode({
        date,
        accountId,
        supplierId,
        customerId,
        employeeId,
        departmentId,
        projectId,
        productId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get account by ID.
 */
export function ledgerAccountGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccount;
    }>(`/ledger/account/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update account.
 */
export function ledgerAccountPut(id: number, account?: Account, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccount;
    }>(`/ledger/account/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: account
    }));
}
/**
 * Delete account.
 */
export function ledgerAccountDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/account/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find accounts corresponding with sent data.
 */
export function ledgerAccountSearch({ id, $number, isBankAccount, isInactive, isApplicableForSupplierInvoice, ledgerType, isBalanceAccount, saftCode, $from, count, sorting, fields }: {
    id?: string;
    $number?: string;
    isBankAccount?: boolean;
    isInactive?: boolean;
    isApplicableForSupplierInvoice?: boolean;
    ledgerType?: "GENERAL" | "CUSTOMER" | "VENDOR" | "EMPLOYEE" | "ASSET";
    isBalanceAccount?: boolean;
    saftCode?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccountRead;
    }>(`/ledger/account${QS.query(QS.explode({
        id,
        "number": $number,
        isBankAccount,
        isInactive,
        isApplicableForSupplierInvoice,
        ledgerType,
        isBalanceAccount,
        saftCode,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a new account.
 */
export function ledgerAccountPost(account?: Account, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccount;
    }>("/ledger/account", oazapfts.json({
        ...opts,
        method: "POST",
        body: account
    }));
}
/**
 * Create several accounts.
 */
export function ledgerAccountListPostList(body?: Account[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccountRead;
    }>("/ledger/account/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple accounts.
 */
export function ledgerAccountListPutList(body?: Account[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccountRead;
    }>("/ledger/account/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete multiple accounts.
 */
export function ledgerAccountListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/account/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get accounting period by ID.
 */
export function ledgerAccountingPeriodGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccountingPeriod;
    }>(`/ledger/accountingPeriod/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find accounting periods corresponding with sent data.
 */
export function ledgerAccountingPeriodSearch({ id, numberFrom, numberTo, startFrom, startTo, endFrom, endTo, count, $from, sorting, fields }: {
    id?: string;
    numberFrom?: number;
    numberTo?: number;
    startFrom?: string;
    startTo?: string;
    endFrom?: string;
    endTo?: string;
    count?: number;
    $from?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccountingPeriodRead;
    }>(`/ledger/accountingPeriod${QS.query(QS.explode({
        id,
        numberFrom,
        numberTo,
        startFrom,
        startTo,
        endFrom,
        endTo,
        count,
        "from": $from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get annual account by ID.
 */
export function ledgerAnnualAccountGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAnnualAccount;
    }>(`/ledger/annualAccount/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find annual accounts corresponding with sent data.
 */
export function ledgerAnnualAccountSearch({ id, yearFrom, yearTo, $from, count, sorting, fields }: {
    id?: string;
    yearFrom?: number;
    yearTo?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAnnualAccountRead;
    }>(`/ledger/annualAccount${QS.query(QS.explode({
        id,
        yearFrom,
        yearTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get close group by ID.
 */
export function ledgerCloseGroupGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCloseGroup;
    }>(`/ledger/closeGroup/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find close groups corresponding with sent data.
 */
export function ledgerCloseGroupSearch(dateFrom: string, dateTo: string, { id, $from, count, sorting, fields }: {
    id?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCloseGroupRead;
    }>(`/ledger/closeGroup${QS.query(QS.explode({
        id,
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get payment type for outgoing payments by ID.
 */
export function ledgerPaymentTypeOutGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPaymentTypeOut;
    }>(`/ledger/paymentTypeOut/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update existing payment type for outgoing payments
 */
export function ledgerPaymentTypeOutPut(id: number, paymentTypeOut?: PaymentTypeOut, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPaymentTypeOut;
    }>(`/ledger/paymentTypeOut/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: paymentTypeOut
    }));
}
/**
 * [BETA] Delete payment type for outgoing payments by ID.
 */
export function ledgerPaymentTypeOutDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/paymentTypeOut/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Gets payment types for outgoing payments
 */
export function ledgerPaymentTypeOutSearch({ id, description, isInactive, $from, count, sorting, fields }: {
    id?: string;
    description?: string;
    isInactive?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentTypeOutRead;
    }>(`/ledger/paymentTypeOut${QS.query(QS.explode({
        id,
        description,
        isInactive,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new payment type for outgoing payments
 */
export function ledgerPaymentTypeOutPost(paymentTypeOut?: PaymentTypeOut, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPaymentTypeOut;
    }>("/ledger/paymentTypeOut", oazapfts.json({
        ...opts,
        method: "POST",
        body: paymentTypeOut
    }));
}
/**
 * [BETA] Create multiple payment types for outgoing payments at once
 */
export function ledgerPaymentTypeOutListPostList(body?: PaymentTypeOut[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentTypeOutRead;
    }>("/ledger/paymentTypeOut/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple payment types for outgoing payments at once
 */
export function ledgerPaymentTypeOutListPutList(body?: PaymentTypeOut[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentTypeOutRead;
    }>("/ledger/paymentTypeOut/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Find postings by ID.
 */
export function ledgerPostingGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPosting;
    }>(`/ledger/posting/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find postings corresponding with sent data.
 */
export function ledgerPostingSearch(dateFrom: string, dateTo: string, { openPostings, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, accountNumberFrom, accountNumberTo, $type, $from, count, sorting, fields }: {
    openPostings?: string;
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    accountNumberFrom?: number;
    accountNumberTo?: number;
    $type?: "INCOMING_PAYMENT" | "INCOMING_PAYMENT_OPPOSITE" | "INVOICE_EXPENSE" | "OUTGOING_INVOICE_CUSTOMER_POSTING" | "WAGE";
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePostingRead;
    }>(`/ledger/posting${QS.query(QS.explode({
        dateFrom,
        dateTo,
        openPostings,
        accountId,
        supplierId,
        customerId,
        employeeId,
        departmentId,
        projectId,
        productId,
        accountNumberFrom,
        accountNumberTo,
        "type": $type,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find open posts corresponding with sent data.
 */
export function ledgerPostingOpenPostOpenPost(date: string, { accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, accountNumberFrom, accountNumberTo, $from, count, sorting, fields }: {
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    accountNumberFrom?: number;
    accountNumberTo?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePostingRead;
    }>(`/ledger/posting/openPost${QS.query(QS.explode({
        date,
        accountId,
        supplierId,
        customerId,
        employeeId,
        departmentId,
        projectId,
        productId,
        accountNumberFrom,
        accountNumberTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get vat type by ID.
 */
export function ledgerVatTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVatType;
    }>(`/ledger/vatType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find vat types corresponding with sent data.
 */
export function ledgerVatTypeSearch({ id, $number, typeOfVat, vatDate, shouldIncludeSpecificationTypes, $from, count, sorting, fields }: {
    id?: string;
    $number?: string;
    typeOfVat?: "OUTGOING" | "INCOMING" | "INCOMING_INVOICE" | "PROJECT";
    vatDate?: string;
    shouldIncludeSpecificationTypes?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVatTypeRead;
    }>(`/ledger/vatType${QS.query(QS.explode({
        id,
        "number": $number,
        typeOfVat,
        vatDate,
        shouldIncludeSpecificationTypes,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a new relative VAT Type. These are used if the company has 'forholdsmessig fradrag for inngående MVA'.
 */
export function ledgerVatTypeCreateRelativeVatTypeCreateRelativeVatType(name: string, vatTypeId: number, percentage: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVatType;
    }>(`/ledger/vatType/createRelativeVatType${QS.query(QS.explode({
        name,
        vatTypeId,
        percentage
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get the voucher for the opening balance.
 */
export function ledgerVoucherOpeningBalanceGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/openingBalance${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add an opening balance on the given date.  All movements before this date will be 'zeroed out' in a separate correction voucher. The opening balance must have the first day of a month as the date, and it's also recommended to have the first day of the year as the date. If the postings provided don't balance the voucher, the difference will automatically be posted to a help account
 */
export function ledgerVoucherOpeningBalancePost(openingBalance?: OpeningBalance, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/openingBalance${QS.query(QS.explode({
        fields
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: openingBalance
    }));
}
/**
 * [BETA] Delete the opening balance. The correction voucher will also be deleted
 */
export function ledgerVoucherOpeningBalanceDelete(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/ledger/voucher/openingBalance", {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get the correction voucher for the opening balance.
 */
export function ledgerVoucherOpeningBalanceCorrectionVoucherCorrectionVoucher({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/openingBalance/>correctionVoucher${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get voucher by ID.
 */
export function ledgerVoucherGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update voucher. Postings with guiRow==0 will be deleted and regenerated.
 */
export function ledgerVoucherPut(id: number, voucher?: Voucher, { sendToLedger }: {
    sendToLedger?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${encodeURIComponent(id)}${QS.query(QS.explode({
        sendToLedger
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: voucher
    }));
}
/**
 * Delete voucher by ID.
 */
export function ledgerVoucherDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Reverses the voucher, and returns the reversed voucher. Supports reversing most voucher types, except salary transactions.
 */
export function ledgerVoucherReverseReverse(id: number, date: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${encodeURIComponent(id)}/:reverse${QS.query(QS.explode({
        date
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find vouchers corresponding with sent data.
 */
export function ledgerVoucherSearch(dateFrom: string, dateTo: string, { id, $number, numberFrom, numberTo, typeId, $from, count, sorting, fields }: {
    id?: string;
    $number?: string;
    numberFrom?: number;
    numberTo?: number;
    typeId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VoucherSearchResponseRead;
    }>(`/ledger/voucher${QS.query(QS.explode({
        id,
        "number": $number,
        numberFrom,
        numberTo,
        typeId,
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
 */
export function ledgerVoucherPost(voucher?: Voucher, { sendToLedger }: {
    sendToLedger?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher${QS.query(QS.explode({
        sendToLedger
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: voucher
    }));
}
/**
 * Returns a data structure containing meta information about operations that are available for this voucher. Currently only implemented for DELETE: It is possible to check if the voucher is deletable.
 */
export function ledgerVoucherOptionsOptions(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherOptions;
    }>(`/ledger/voucher/${encodeURIComponent(id)}/options${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update multiple vouchers. Postings with guiRow==0 will be deleted and regenerated.
 */
export function ledgerVoucherListPutList(body?: Voucher[], { sendToLedger }: {
    sendToLedger?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherRead;
    }>(`/ledger/voucher/list${QS.query(QS.explode({
        sendToLedger
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Upload a document to create one or more vouchers. Valid document formats are PDF, PNG, JPEG and TIFF. Send as multipart form.
 */
export function ledgerVoucherImportDocumentImportDocument(body: {
    file: Blob;
    description?: string;
}, { split }: {
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherRead;
    }>(`/ledger/voucher/importDocument${QS.query(QS.explode({
        split
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Upload attachment to voucher. If the voucher already has an attachment the content will be appended to the existing attachment as new PDF page(s). Valid document formats are PDF, PNG, JPEG and TIFF. Non PDF formats will be converted to PDF. Send as multipart form.
 */
export function ledgerVoucherAttachmentUploadAttachment(voucherId: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/${encodeURIComponent(voucherId)}/attachment`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Delete attachment.
 */
export function ledgerVoucherAttachmentDeleteAttachment(voucherId: number, { version, sendToInbox, split }: {
    version?: number;
    sendToInbox?: boolean;
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/${encodeURIComponent(voucherId)}/attachment${QS.query(QS.explode({
        version,
        sendToInbox,
        split
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Send voucher to inbox.
 */
export function ledgerVoucherSendToInboxSendToInbox(id: number, { version, comment }: {
    version?: number;
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${encodeURIComponent(id)}/:sendToInbox${QS.query(QS.explode({
        version,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get PDF representation of voucher by ID.
 */
export function ledgerVoucherPdfDownloadPdf(voucherId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/ledger/voucher/${encodeURIComponent(voucherId)}/pdf`, {
        ...opts
    });
}
/**
 * Send voucher to ledger.
 */
export function ledgerVoucherSendToLedgerSendToLedger(id: number, { version, $number }: {
    version?: number;
    $number?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${encodeURIComponent(id)}/:sendToLedger${QS.query(QS.explode({
        version,
        "number": $number
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find non-posted vouchers.
 */
export function ledgerVoucherNonPostedNonPosted(includeNonApproved: boolean, { dateFrom, dateTo, changedSince, $from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    changedSince?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherRead;
    }>(`/ledger/voucher/>nonPosted${QS.query(QS.explode({
        dateFrom,
        dateTo,
        includeNonApproved,
        changedSince,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find vouchers in voucher reception.
 */
export function ledgerVoucherVoucherReceptionVoucherReception({ dateFrom, dateTo, searchText, $from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    searchText?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherRead;
    }>(`/ledger/voucher/>voucherReception${QS.query(QS.explode({
        dateFrom,
        dateTo,
        searchText,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find vouchers based on the external voucher number.
 */
export function ledgerVoucherExternalVoucherNumberExternalVoucherNumber({ externalVoucherNumber, $from, count, sorting, fields }: {
    externalVoucherNumber?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherRead;
    }>(`/ledger/voucher/>externalVoucherNumber${QS.query(QS.explode({
        externalVoucherNumber,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [DEPRECATED] Use POST ledger/voucher/{voucherId}/attachment instead.
 */
export function ledgerVoucherPdfUploadPdf(voucherId: number, fileName: string, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/${encodeURIComponent(voucherId)}/pdf/${encodeURIComponent(fileName)}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Import GBAT10. Send as multipart form.
 */
export function ledgerVoucherImportGbat10ImportGbat10(body: {
    generateVatPostings: boolean;
    file: Blob;
    encoding?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/ledger/voucher/importGbat10", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Upload attachment to voucher. If the voucher already has an attachment the content will be appended to the existing attachment as new PDF page(s). Valid document formats are PDF, PNG, JPEG and TIFF. Non PDF formats will be converted to PDF. Send as multipart form.
 */
export function ledgerVoucherHistoricalAttachmentUploadAttachment(voucherId: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/historical/${encodeURIComponent(voucherId)}/attachment`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * API endpoint for creating historical vouchers. These are vouchers created outside Tripletex, and should be from closed accounting years. The intended usage is to get access to historical transcations in Tripletex. Also creates postings. All amount fields in postings will be used. VAT postings must be included, these are not generated automatically like they are for normal vouchers in Tripletex. Requires the \"All vouchers\" and \"Advanced Voucher\" permissions.
 */
export function ledgerVoucherHistoricalHistoricalPostHistorical(body?: HistoricalVoucher[], { comment, useCustomNumberSeries }: {
    comment?: string;
    useCustomNumberSeries?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseHistoricalVoucherRead;
    }>(`/ledger/voucher/historical/historical${QS.query(QS.explode({
        comment,
        useCustomNumberSeries
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Deletes all historical vouchers. Requires the "All vouchers" and "Advanced Voucher" permissions.
 */
export function ledgerVoucherHistoricalReverseHistoricalVouchersReverseHistoricalVouchers(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/ledger/voucher/historical/:reverseHistoricalVouchers", {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Close postings.
 */
export function ledgerVoucherHistoricalClosePostingsClosePostings(body?: string, { postingIds }: {
    postingIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/historical/:closePostings${QS.query(QS.explode({
        postingIds
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Create one employee, based on import from external system. Validation is less strict, ie. employee department isn't required.
 */
export function ledgerVoucherHistoricalEmployeePostEmployee(employee?: Employee, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployee;
    }>("/ledger/voucher/historical/employee", oazapfts.json({
        ...opts,
        method: "POST",
        body: employee
    }));
}
/**
 * Get voucher type by ID.
 */
export function ledgerVoucherTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherType;
    }>(`/ledger/voucherType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find voucher types corresponding with sent data.
 */
export function ledgerVoucherTypeSearch({ name, $from, count, sorting, fields }: {
    name?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherTypeRead;
    }>(`/ledger/voucherType${QS.query(QS.explode({
        name,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Wildcard search.
 */
export function municipalityQueryQuery({ id, query, fields, $from, count, sorting }: {
    id?: string;
    query?: string;
    fields?: string;
    $from?: number;
    count?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMunicipalityRead;
    }>(`/municipality/query${QS.query(QS.explode({
        id,
        query,
        fields,
        "from": $from,
        count,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * Get municipalities.
 */
export function municipalitySearch({ includePayrollTaxZones, $from, count, sorting, fields }: {
    includePayrollTaxZones?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMunicipalityRead;
    }>(`/municipality${QS.query(QS.explode({
        includePayrollTaxZones,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Returns the packages that can exist for an account.
 */
export function subscriptionPackagesGetPackages({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMySubscriptionModuleDtoArray;
    }>(`/subscription/packages${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Returns the invoice history for an account.
 */
export function subscriptionInvoiceHistoryGetInvoiceHistory({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoiceOrderLineDtoArray;
    }>(`/subscription/invoiceHistory${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Returns the additional order lines for an account.
 */
export function subscriptionAdditionalOrderLinesGetAdditionalOrderLines({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAdditionalServiceOrderLineDtoArray;
    }>(`/subscription/additionalOrderLines${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Returns the services that are available for an account.
 */
export function subscriptionServicesGetServices({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMySubscriptionModuleDtoArray;
    }>(`/subscription/services${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get order by ID.
 */
export function orderGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrder;
    }>(`/order/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update order.
 */
export function orderPut(id: number, order?: Order, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrder;
    }>(`/order/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: order
    }));
}
/**
 * Delete order.
 */
export function orderDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/order/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find orders corresponding with sent data.
 */
export function orderSearch(orderDateFrom: string, orderDateTo: string, { id, $number, customerId, isClosed, isSubscription, $from, count, sorting, fields }: {
    id?: string;
    $number?: string;
    customerId?: string;
    isClosed?: boolean;
    isSubscription?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOrderRead;
    }>(`/order${QS.query(QS.explode({
        id,
        "number": $number,
        customerId,
        orderDateFrom,
        orderDateTo,
        isClosed,
        isSubscription,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create order.
 */
export function orderPost(order?: Order, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrder;
    }>("/order", oazapfts.json({
        ...opts,
        method: "POST",
        body: order
    }));
}
/**
 * Attach document to specified order ID.
 */
export function orderAttachAttach(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/order/${encodeURIComponent(id)}/:attach`, oazapfts.multipart({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Create multiple Orders with OrderLines. Max 100 at a time.
 */
export function orderListPostList(body?: Order[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOrderRead;
    }>("/order/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Create new invoice from order.
 */
export function orderInvoiceInvoice(id: number, invoiceDate: string, { sendToCustomer, sendType, paymentTypeId, paidAmount, paidAmountAccountCurrency, paymentTypeIdRestAmount, paidAmountAccountCurrencyRest, createOnAccount, amountOnAccount, onAccountComment, createBackorder, invoiceIdIfIsCreditNote, overrideEmailAddress }: {
    sendToCustomer?: boolean;
    sendType?: "EMAIL" | "EHF" | "AVTALEGIRO" | "EFAKTURA" | "VIPPS" | "PAPER" | "MANUAL";
    paymentTypeId?: number;
    paidAmount?: number;
    paidAmountAccountCurrency?: number;
    paymentTypeIdRestAmount?: number;
    paidAmountAccountCurrencyRest?: number;
    createOnAccount?: "NONE" | "WITH_VAT" | "WITHOUT_VAT";
    amountOnAccount?: number;
    onAccountComment?: string;
    createBackorder?: boolean;
    invoiceIdIfIsCreditNote?: number;
    overrideEmailAddress?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/order/${encodeURIComponent(id)}/:invoice${QS.query(QS.explode({
        invoiceDate,
        sendToCustomer,
        sendType,
        paymentTypeId,
        paidAmount,
        paidAmountAccountCurrency,
        paymentTypeIdRestAmount,
        paidAmountAccountCurrencyRest,
        createOnAccount,
        amountOnAccount,
        onAccountComment,
        createBackorder,
        invoiceIdIfIsCreditNote,
        overrideEmailAddress
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Charges a single customer invoice from multiple orders. The orders must be to the same customer, currency, due date, receiver email, attn. and smsNotificationNumber
 */
export function orderInvoiceMultipleOrdersInvoiceMultipleOrders(id: string, invoiceDate: string, { sendToCustomer, createBackorders }: {
    sendToCustomer?: boolean;
    createBackorders?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/order/:invoiceMultipleOrders${QS.query(QS.explode({
        id,
        invoiceDate,
        sendToCustomer,
        createBackorders
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * To create a subscription invoice, first create a order with the subscription enabled, then approve it with this method. This approves the order for subscription invoicing.
 */
export function orderApproveSubscriptionInvoiceApproveSubscriptionInvoice(id: number, invoiceDate: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/order/${encodeURIComponent(id)}/:approveSubscriptionInvoice${QS.query(QS.explode({
        invoiceDate
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Unapproves the order for subscription invoicing.
 */
export function orderUnApproveSubscriptionInvoiceUnApproveSubscriptionInvoice(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/order/${encodeURIComponent(id)}/:unApproveSubscriptionInvoice`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [Beta] Get orderGroup by ID. A orderGroup is a way to group orderLines, and add comments and subtotals
 */
export function orderOrderGroupGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderGroup;
    }>(`/order/orderGroup/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [Beta] Delete orderGroup by ID.
 */
export function orderOrderGroupDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/order/orderGroup/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find orderGroups corresponding with sent data.
 */
export function orderOrderGroupSearch({ ids, orderIds, $from, count, sorting, fields }: {
    ids?: string;
    orderIds?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOrderGroupRead;
    }>(`/order/orderGroup${QS.query(QS.explode({
        ids,
        orderIds,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [Beta] Post orderGroup.
 */
export function orderOrderGroupPost(orderGroup?: OrderGroup, { orderLineIds }: {
    orderLineIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderGroup;
    }>(`/order/orderGroup${QS.query(QS.explode({
        orderLineIds
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: orderGroup
    }));
}
/**
 * [Beta] Put orderGroup.
 */
export function orderOrderGroupPut(orderGroup?: OrderGroup, { orderLineIds, removeExistingOrderLines }: {
    orderLineIds?: string;
    removeExistingOrderLines?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderGroup;
    }>(`/order/orderGroup${QS.query(QS.explode({
        OrderLineIds: orderLineIds,
        removeExistingOrderLines
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: orderGroup
    }));
}
/**
 * Get order line by ID.
 */
export function orderOrderlineGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderLine;
    }>(`/order/orderline/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Put order line
 */
export function orderOrderlinePut(id: number, orderLine?: OrderLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderLine;
    }>(`/order/orderline/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: orderLine
    }));
}
/**
 * [BETA] Delete order line by ID.
 */
export function orderOrderlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/order/orderline/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create order line. When creating several order lines, use /list for better performance.
 */
export function orderOrderlinePost(orderLine?: OrderLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderLine;
    }>("/order/orderline", oazapfts.json({
        ...opts,
        method: "POST",
        body: orderLine
    }));
}
/**
 * Create multiple order lines.
 */
export function orderOrderlineListPostList(body?: OrderLine[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOrderLineRead;
    }>("/order/orderline/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Get external product by ID.
 */
export function productExternalGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperExternalProduct;
    }>(`/product/external/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find external products corresponding with sent data. The sorting-field is not in use on this endpoint.
 */
export function productExternalSearch({ name, wholesaler, organizationNumber, elNumber, nrfNumber, isInactive, $from, count, sorting, fields }: {
    name?: string;
    wholesaler?: "AHLSELL" | "BROEDRENE_DAHL" | "ELEKTROSKANDIA" | "HEIDENREICH" | "ONNINEN" | "SONEPAR" | "SOLAR" | "BERGAARD_AMUNDSEN" | "BERGAARD_AMUNDSEN_STAVANGER" | "SORLANDET_ELEKTRO" | "ETMAN_DISTRIBUSJON" | "ETM_OST" | "CENIKA" | "EP_ENGROS" | "BETEK" | "DGROUP" | "FAGERHULT" | "GLAMOX" | "SCHNEIDER" | "STOKKAN" | "WURTH" | "ELEKTROIMPORTOEREN" | "THERMOFLOOR" | "LYSKOMPONENTER" | "NORDESIGN";
    organizationNumber?: string;
    elNumber?: string;
    nrfNumber?: string;
    isInactive?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseExternalProductRead;
    }>(`/product/external${QS.query(QS.explode({
        name,
        wholesaler,
        organizationNumber,
        elNumber,
        nrfNumber,
        isInactive,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get product by ID.
 */
export function productGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProduct;
    }>(`/product/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update product.
 */
export function productPut(id: number, product?: Product, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProduct;
    }>(`/product/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: product
    }));
}
/**
 * [BETA] Delete product.
 */
export function productDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find products corresponding with sent data.
 */
export function productSearch({ $number, ids, productNumber, name, ean, isInactive, isStockItem, isSupplierProduct, supplierId, currencyId, vatTypeId, productUnitId, departmentId, accountId, costExcludingVatCurrencyFrom, costExcludingVatCurrencyTo, priceExcludingVatCurrencyFrom, priceExcludingVatCurrencyTo, priceIncludingVatCurrencyFrom, priceIncludingVatCurrencyTo, $from, count, sorting, fields }: {
    $number?: string;
    ids?: string;
    productNumber?: string[];
    name?: string;
    ean?: string;
    isInactive?: boolean;
    isStockItem?: boolean;
    isSupplierProduct?: boolean;
    supplierId?: string;
    currencyId?: string;
    vatTypeId?: string;
    productUnitId?: string;
    departmentId?: string;
    accountId?: string;
    costExcludingVatCurrencyFrom?: number;
    costExcludingVatCurrencyTo?: number;
    priceExcludingVatCurrencyFrom?: number;
    priceExcludingVatCurrencyTo?: number;
    priceIncludingVatCurrencyFrom?: number;
    priceIncludingVatCurrencyTo?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductRead;
    }>(`/product${QS.query(QS.explode({
        "number": $number,
        ids,
        productNumber,
        name,
        ean,
        isInactive,
        isStockItem,
        isSupplierProduct,
        supplierId,
        currencyId,
        vatTypeId,
        productUnitId,
        departmentId,
        accountId,
        costExcludingVatCurrencyFrom,
        costExcludingVatCurrencyTo,
        priceExcludingVatCurrencyFrom,
        priceExcludingVatCurrencyTo,
        priceIncludingVatCurrencyFrom,
        priceIncludingVatCurrencyTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create new product.
 */
export function productPost(product?: Product, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProduct;
    }>("/product", oazapfts.json({
        ...opts,
        method: "POST",
        body: product
    }));
}
/**
 * [BETA] Add multiple products.
 */
export function productListPostList(body?: Product[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductRead;
    }>("/product/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update a list of products.
 */
export function productListPutList(body?: Product[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductRead;
    }>("/product/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Upload image to Product. Existing image on product will be replaced if exists
 */
export function productImageUploadImage(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProduct;
    }>(`/product/${encodeURIComponent(id)}/image`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete image.
 */
export function productImageDeleteImage(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/${encodeURIComponent(id)}/image`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get supplierProduct by ID.
 */
export function productSupplierProductGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierProduct;
    }>(`/product/supplierProduct/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update supplierProduct.
 */
export function productSupplierProductPut(id: number, supplierProduct?: SupplierProduct, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierProduct;
    }>(`/product/supplierProduct/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: supplierProduct
    }));
}
/**
 * [BETA] Delete supplierProduct.
 */
export function productSupplierProductDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/supplierProduct/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find products corresponding with sent data.
 */
export function productSupplierProductSearch({ productId, vendorId, query, isInactive, productGroupId, count, fields, $from, sorting }: {
    productId?: number;
    vendorId?: number;
    query?: string;
    isInactive?: boolean;
    productGroupId?: string;
    count?: number;
    fields?: string;
    $from?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierProductRead;
    }>(`/product/supplierProduct${QS.query(QS.explode({
        productId,
        vendorId,
        query,
        isInactive,
        productGroupId,
        count,
        fields,
        "from": $from,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * Create new supplierProduct.
 */
export function productSupplierProductPost(supplierProduct?: SupplierProduct, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierProduct;
    }>("/product/supplierProduct", oazapfts.json({
        ...opts,
        method: "POST",
        body: supplierProduct
    }));
}
/**
 * Create list of new supplierProduct.
 */
export function productSupplierProductListPostList(body?: SupplierProduct[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierProductRead;
    }>("/product/supplierProduct/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update a list of supplierProduct.
 */
export function productSupplierProductListPutList(body?: SupplierProduct[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierProductRead;
    }>("/product/supplierProduct/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Get discount group by ID.
 */
export function productDiscountGroupGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDiscountGroup;
    }>(`/product/discountGroup/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find discount groups corresponding with sent data.
 */
export function productDiscountGroupSearch({ id, name, $number, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    $number?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDiscountGroupRead;
    }>(`/product/discountGroup${QS.query(QS.explode({
        id,
        name,
        "number": $number,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get inventory location by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductInventoryLocation;
    }>(`/product/inventoryLocation/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationPut(id: number, productInventoryLocation?: ProductInventoryLocation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductInventoryLocation;
    }>(`/product/inventoryLocation/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: productInventoryLocation
    }));
}
/**
 * [BETA] Delete product inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/inventoryLocation/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find inventory locations by product ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationSearch({ productId, inventoryId, isMainLocation, $from, count, sorting, fields }: {
    productId?: string;
    inventoryId?: string;
    isMainLocation?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductInventoryLocationRead;
    }>(`/product/inventoryLocation${QS.query(QS.explode({
        productId,
        inventoryId,
        isMainLocation,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new product inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationPost(productInventoryLocation?: ProductInventoryLocation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductInventoryLocation;
    }>("/product/inventoryLocation", oazapfts.json({
        ...opts,
        method: "POST",
        body: productInventoryLocation
    }));
}
/**
 * [BETA] Add multiple product inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationListPostList(body?: ProductInventoryLocation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductInventoryLocationRead;
    }>("/product/inventoryLocation/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple product inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationListPutList(body?: ProductInventoryLocation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductInventoryLocationRead;
    }>("/product/inventoryLocation/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Get logistics settings of logged in company.
 */
export function productLogisticsSettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLogisticsSettings;
    }>(`/product/logisticsSettings${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update logistics settings of logged in company.
 */
export function productLogisticsSettingsPut(logisticsSettings?: LogisticsSettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLogisticsSettings;
    }>("/product/logisticsSettings", oazapfts.json({
        ...opts,
        method: "PUT",
        body: logisticsSettings
    }));
}
/**
 * [BETA] Find product group by ID.
 */
export function productGroupGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductGroup;
    }>(`/product/group/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product group.
 */
export function productGroupPut(id: number, productGroup?: ProductGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductGroup;
    }>(`/product/group/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: productGroup
    }));
}
/**
 * [BETA] Delete product group.
 */
export function productGroupDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/group/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Wildcard search.
 */
export function productGroupQueryQuery({ query, name, fields, $from, count, sorting }: {
    query?: string;
    name?: string;
    fields?: string;
    $from?: number;
    count?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRead;
    }>(`/product/group/query${QS.query(QS.explode({
        query,
        name,
        fields,
        "from": $from,
        count,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find product group with sent data
 */
export function productGroupSearch({ id, name, query, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    query?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRead;
    }>(`/product/group${QS.query(QS.explode({
        id,
        name,
        query,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new product group.
 */
export function productGroupPost(productGroup?: ProductGroup, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductGroup;
    }>("/product/group", oazapfts.json({
        ...opts,
        method: "POST",
        body: productGroup
    }));
}
/**
 * [BETA] Add multiple products groups.
 */
export function productGroupListPostList(body?: ProductGroup[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRead;
    }>("/product/group/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update a list of product groups.
 */
export function productGroupListPutList(body?: ProductGroup[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRead;
    }>("/product/group/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Delete multiple product groups.
 */
export function productGroupListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/group/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find product group relation by ID.
 */
export function productGroupRelationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductGroupRelation;
    }>(`/product/groupRelation/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Delete product group relation.
 */
export function productGroupRelationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/groupRelation/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find product group relation with sent data.
 */
export function productGroupRelationSearch({ id, productId, productGroupId, $from, count, sorting, fields }: {
    id?: string;
    productId?: string;
    productGroupId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRelationRead;
    }>(`/product/groupRelation${QS.query(QS.explode({
        id,
        productId,
        productGroupId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new product group relation.
 */
export function productGroupRelationPost(productGroupRelation?: ProductGroupRelation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductGroupRelation;
    }>("/product/groupRelation", oazapfts.json({
        ...opts,
        method: "POST",
        body: productGroupRelation
    }));
}
/**
 * [BETA] Add multiple products group relations.
 */
export function productGroupRelationListPostList(body?: ProductGroupRelation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRelationRead;
    }>("/product/groupRelation/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete multiple product group relations.
 */
export function productGroupRelationListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/groupRelation/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find prices for a product. Only available for users that have activated the Logistics/Logistics Plus Beta-program in 'Our customer account'.
 */
export function productProductPriceSearch(productId: string, { fromDate, toDate, showOnlyLastPrice, $from, count, sorting, fields }: {
    fromDate?: string;
    toDate?: string;
    showOnlyLastPrice?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductPriceRead;
    }>(`/product/productPrice${QS.query(QS.explode({
        productId,
        fromDate,
        toDate,
        showOnlyLastPrice,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get product unit by ID.
 */
export function productUnitGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductUnit;
    }>(`/product/unit/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product unit.
 */
export function productUnitPut(id: number, productUnit?: ProductUnit, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductUnit;
    }>(`/product/unit/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: productUnit
    }));
}
/**
 * [BETA] Delete product unit by ID.
 */
export function productUnitDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/unit/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Wildcard search.
 */
export function productUnitQueryQuery({ query, count, fields, $from, sorting }: {
    query?: string;
    count?: number;
    fields?: string;
    $from?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnitRead;
    }>(`/product/unit/query${QS.query(QS.explode({
        query,
        count,
        fields,
        "from": $from,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * Find product units corresponding with sent data.
 */
export function productUnitSearch({ id, name, nameShort, commonCode, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    nameShort?: string;
    commonCode?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnitRead;
    }>(`/product/unit${QS.query(QS.explode({
        id,
        name,
        nameShort,
        commonCode,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new product unit.
 */
export function productUnitPost(productUnit?: ProductUnit, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductUnit;
    }>("/product/unit", oazapfts.json({
        ...opts,
        method: "POST",
        body: productUnit
    }));
}
/**
 * [BETA] Create multiple product units.
 */
export function productUnitListPostList(body?: ProductUnit[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnitRead;
    }>("/product/unit/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update list of product units.
 */
export function productUnitListPutList(body?: ProductUnit[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnitRead;
    }>("/product/unit/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Get product unit master by ID.
 */
export function productUnitMasterGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductUnitMaster;
    }>(`/product/unit/master/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find product units master corresponding with sent data.
 */
export function productUnitMasterSearch({ id, name, nameShort, commonCode, peppolName, peppolSymbol, isInactive, count, $from, sorting, fields }: {
    id?: string;
    name?: string;
    nameShort?: string;
    commonCode?: string;
    peppolName?: string;
    peppolSymbol?: string;
    isInactive?: boolean;
    count?: number;
    $from?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnitMasterRead;
    }>(`/product/unit/master${QS.query(QS.explode({
        id,
        name,
        nameShort,
        commonCode,
        peppolName,
        peppolSymbol,
        isInactive,
        count,
        "from": $from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find project by ID.
 */
export function projectGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProject;
    }>(`/project/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update project.
 */
export function projectPut(id: number, project?: Project, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProject;
    }>(`/project/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: project
    }));
}
/**
 * [BETA] Delete project.
 */
export function projectDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find projects corresponding with sent data.
 */
export function projectSearch({ id, name, $number, isOffer, projectManagerId, employeeInProjectId, departmentId, startDateFrom, startDateTo, endDateFrom, endDateTo, isClosed, isFixedPrice, customerId, externalAccountsNumber, includeRecentlyClosed, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    $number?: string;
    isOffer?: boolean;
    projectManagerId?: string;
    employeeInProjectId?: string;
    departmentId?: string;
    startDateFrom?: string;
    startDateTo?: string;
    endDateFrom?: string;
    endDateTo?: string;
    isClosed?: boolean;
    isFixedPrice?: boolean;
    customerId?: string;
    externalAccountsNumber?: string;
    includeRecentlyClosed?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>(`/project${QS.query(QS.explode({
        id,
        name,
        "number": $number,
        isOffer,
        projectManagerId,
        employeeInProjectId,
        departmentId,
        startDateFrom,
        startDateTo,
        endDateFrom,
        endDateTo,
        isClosed,
        isFixedPrice,
        customerId,
        externalAccountsNumber,
        includeRecentlyClosed,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add new project.
 */
export function projectPost(project?: Project, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProject;
    }>("/project", oazapfts.json({
        ...opts,
        method: "POST",
        body: project
    }));
}
/**
 * [BETA] Delete multiple projects.
 */
export function projectDeleteList(body?: Project[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/project", oazapfts.json({
        ...opts,
        method: "DELETE",
        body
    }));
}
/**
 * [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
 */
export function projectListPostList(body?: Project[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>("/project/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple projects.
 */
export function projectListPutList(body?: Project[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>("/project/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Delete projects.
 */
export function projectListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find projects applicable for time sheet registration on a specific day.
 */
export function projectForTimeSheetGetForTimeSheet({ includeProjectOffers, employeeId, date, $from, count, sorting, fields }: {
    includeProjectOffers?: boolean;
    employeeId?: number;
    date?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>(`/project/>forTimeSheet${QS.query(QS.explode({
        includeProjectOffers,
        employeeId,
        date,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Upload project import file.
 */
export function projectImportImportProjectStatement(fileFormat: "XLS" | "CSV", body: {
    file: Blob;
}, { encoding, delimiter, ignoreFirstRow }: {
    encoding?: string;
    delimiter?: string;
    ignoreFirstRow?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>(`/project/import${QS.query(QS.explode({
        fileFormat,
        encoding,
        delimiter,
        ignoreFirstRow
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Find project category by ID.
 */
export function projectCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectCategory;
    }>(`/project/category/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update project category.
 */
export function projectCategoryPut(id: number, projectCategory?: ProjectCategory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectCategory;
    }>(`/project/category/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: projectCategory
    }));
}
/**
 * Find project categories corresponding with sent data.
 */
export function projectCategorySearch({ id, name, $number, description, $from, count, sorting, fields }: {
    id?: string;
    name?: string;
    $number?: string;
    description?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectCategoryRead;
    }>(`/project/category${QS.query(QS.explode({
        id,
        name,
        "number": $number,
        description,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new project category.
 */
export function projectCategoryPost(projectCategory?: ProjectCategory, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectCategory;
    }>("/project/category", oazapfts.json({
        ...opts,
        method: "POST",
        body: projectCategory
    }));
}
/**
 * [BETA] Get order line by ID.
 */
export function projectOrderlineGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectOrderLine;
    }>(`/project/orderline/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update project orderline.
 */
export function projectOrderlinePut(id: number, projectOrderLine?: ProjectOrderLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectOrderLine;
    }>(`/project/orderline/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: projectOrderLine
    }));
}
/**
 * Delete order line by ID.
 */
export function projectOrderlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/orderline/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find all order lines for project.
 */
export function projectOrderlineSearch(projectId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectOrderLineRead;
    }>(`/project/orderline${QS.query(QS.explode({
        projectId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create order line. When creating several order lines, use /list for better performance.
 */
export function projectOrderlinePost(projectOrderLine?: ProjectOrderLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectOrderLine;
    }>("/project/orderline", oazapfts.json({
        ...opts,
        method: "POST",
        body: projectOrderLine
    }));
}
/**
 * [BETA] Create multiple order lines.
 */
export function projectOrderlineListPostList(body?: ProjectOrderLine[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectOrderLineRead;
    }>("/project/orderline/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find project participant by ID.
 */
export function projectParticipantGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectParticipant;
    }>(`/project/participant/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update project participant.
 */
export function projectParticipantPut(id: number, projectParticipant?: ProjectParticipant, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectParticipant;
    }>(`/project/participant/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: projectParticipant
    }));
}
/**
 * [BETA] Add new project participant.
 */
export function projectParticipantPost(projectParticipant?: ProjectParticipant, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectParticipant;
    }>("/project/participant", oazapfts.json({
        ...opts,
        method: "POST",
        body: projectParticipant
    }));
}
/**
 * [BETA] Add new project participant. Multiple project participants can be sent in the same request.
 */
export function projectParticipantListPostList(body?: ProjectParticipant[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectParticipantRead;
    }>("/project/participant/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete project participants.
 */
export function projectParticipantListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/participant/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find invoicing reserve by project period.
 */
export function projectPeriodInvoicingReserveInvoicingReserve(dateFrom: string, dateTo: string, id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectPeriodInvoicingReserve;
    }>(`/project/${encodeURIComponent(id)}/period/invoicingReserve${QS.query(QS.explode({
        dateFrom,
        dateTo,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find invoiced info by project period.
 */
export function projectPeriodInvoicedInvoiced(dateFrom: string, dateTo: string, id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectPeriodInvoiced;
    }>(`/project/${encodeURIComponent(id)}/period/invoiced${QS.query(QS.explode({
        dateFrom,
        dateTo,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find overall status by project period.
 */
export function projectPeriodOverallStatusOverallStatus(dateFrom: string, dateTo: string, id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectPeriodOverallStatus;
    }>(`/project/${encodeURIComponent(id)}/period/overallStatus${QS.query(QS.explode({
        dateFrom,
        dateTo,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find overall status by project period.
 */
export function projectPeriodMonthlyStatusMonthlyStatus(dateFrom: string, dateTo: string, id: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectPeriodMonthlyStatusRead;
    }>(`/project/${encodeURIComponent(id)}/period/monthlyStatus${QS.query(QS.explode({
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find hourlist report by project period.
 */
export function projectPeriodHourlistReportHourlistReport(dateFrom: string, dateTo: string, id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectPeriodHourlyReport;
    }>(`/project/${encodeURIComponent(id)}/period/hourlistReport${QS.query(QS.explode({
        dateFrom,
        dateTo,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get the budget status for the project period
 */
export function projectPeriodBudgetStatusGetBudgetStatus(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectBudgetStatus;
    }>(`/project/${encodeURIComponent(id)}/period/budgetStatus${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find project activity by id
 */
export function projectProjectActivityGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectActivity;
    }>(`/project/projectActivity/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete project activity
 */
export function projectProjectActivityDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/projectActivity/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Add project activity.
 */
export function projectProjectActivityPost(projectActivity?: ProjectActivity, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectActivity;
    }>("/project/projectActivity", oazapfts.json({
        ...opts,
        method: "POST",
        body: projectActivity
    }));
}
/**
 * Delete project activities
 */
export function projectProjectActivityListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/projectActivity/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get project control form by ID.
 */
export function projectControlFormGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectControlForm;
    }>(`/project/controlForm/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get project control forms by project ID.
 */
export function projectControlFormSearch(projectId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectControlFormRead;
    }>(`/project/controlForm${QS.query(QS.explode({
        projectId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get project control form type by ID.
 */
export function projectControlFormTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectControlFormType;
    }>(`/project/controlFormType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get project control form types
 */
export function projectControlFormTypeSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectControlFormTypeRead;
    }>(`/project/controlFormType${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find project hourly rate by ID.
 */
export function projectHourlyRatesGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectHourlyRate;
    }>(`/project/hourlyRates/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a project hourly rate.
 */
export function projectHourlyRatesPut(id: number, projectHourlyRate?: ProjectHourlyRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectHourlyRate;
    }>(`/project/hourlyRates/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: projectHourlyRate
    }));
}
/**
 * Delete Project Hourly Rate
 */
export function projectHourlyRatesDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find project hourly rates corresponding with sent data.
 */
export function projectHourlyRatesSearch({ id, projectId, $type, startDateFrom, startDateTo, showInProjectOrder, $from, count, sorting, fields }: {
    id?: string;
    projectId?: string;
    $type?: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    startDateFrom?: string;
    startDateTo?: string;
    showInProjectOrder?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRateRead;
    }>(`/project/hourlyRates${QS.query(QS.explode({
        id,
        projectId,
        "type": $type,
        startDateFrom,
        startDateTo,
        showInProjectOrder,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a project hourly rate.
 */
export function projectHourlyRatesPost(projectHourlyRate?: ProjectHourlyRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectHourlyRate;
    }>("/project/hourlyRates", oazapfts.json({
        ...opts,
        method: "POST",
        body: projectHourlyRate
    }));
}
/**
 * Create multiple project hourly rates.
 */
export function projectHourlyRatesListPostList(body?: ProjectHourlyRate[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRateRead;
    }>("/project/hourlyRates/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple project hourly rates.
 */
export function projectHourlyRatesListPutList(body?: ProjectHourlyRate[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRateRead;
    }>("/project/hourlyRates/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete project hourly rates.
 */
export function projectHourlyRatesListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Update or add the same project hourly rate from project overview.
 */
export function projectHourlyRatesUpdateOrAddHourRatesUpdateOrAddHourRates(ids: string, hourlyRate?: HourlyRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRateRead;
    }>(`/project/hourlyRates/updateOrAddHourRates${QS.query(QS.explode({
        ids
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: hourlyRate
    }));
}
/**
 * Delete project hourly rates by project id.
 */
export function projectHourlyRatesDeleteByProjectIdsDeleteByProjectIds(ids: string, date: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>(`/project/hourlyRates/deleteByProjectIds${QS.query(QS.explode({
        ids,
        date
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find project specific rate by ID.
 */
export function projectHourlyRatesProjectSpecificRatesGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSpecificRate;
    }>(`/project/hourlyRates/projectSpecificRates/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a project specific rate.
 */
export function projectHourlyRatesProjectSpecificRatesPut(id: number, projectSpecificRate?: ProjectSpecificRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSpecificRate;
    }>(`/project/hourlyRates/projectSpecificRates/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: projectSpecificRate
    }));
}
/**
 * Delete project specific rate
 */
export function projectHourlyRatesProjectSpecificRatesDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/projectSpecificRates/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find project specific rates corresponding with sent data.
 */
export function projectHourlyRatesProjectSpecificRatesSearch({ id, projectHourlyRateId, employeeId, activityId, $from, count, sorting, fields }: {
    id?: string;
    projectHourlyRateId?: string;
    employeeId?: string;
    activityId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectSpecificRateRead;
    }>(`/project/hourlyRates/projectSpecificRates${QS.query(QS.explode({
        id,
        projectHourlyRateId,
        employeeId,
        activityId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create new project specific rate.
 */
export function projectHourlyRatesProjectSpecificRatesPost(projectSpecificRate?: ProjectSpecificRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSpecificRate;
    }>("/project/hourlyRates/projectSpecificRates", oazapfts.json({
        ...opts,
        method: "POST",
        body: projectSpecificRate
    }));
}
/**
 * Create multiple new project specific rates.
 */
export function projectHourlyRatesProjectSpecificRatesListPostList(body?: ProjectSpecificRate[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectSpecificRateRead;
    }>("/project/hourlyRates/projectSpecificRates/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple project specific rates.
 */
export function projectHourlyRatesProjectSpecificRatesListPutList(body?: ProjectSpecificRate[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectSpecificRateRead;
    }>("/project/hourlyRates/projectSpecificRates/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete project specific rates.
 */
export function projectHourlyRatesProjectSpecificRatesListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/projectSpecificRates/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get resource plan entries in the specified period.
 */
export function projectResourcePlanBudgetGet(periodType: "HOUR" | "DAY" | "WEEK" | "MONTH", { projectId, periodStart, periodEnd, fields }: {
    projectId?: number;
    periodStart?: string;
    periodEnd?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperResourcePlanBudget;
    }>(`/project/resourcePlanBudget${QS.query(QS.explode({
        projectId,
        periodStart,
        periodEnd,
        periodType,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get project settings of logged in company.
 */
export function projectSettingsGet({ useNkode, fields }: {
    useNkode?: boolean;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSettings;
    }>(`/project/settings${QS.query(QS.explode({
        useNkode,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update project settings for company
 */
export function projectSettingsPut(projectSettings?: ProjectSettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSettings;
    }>("/project/settings", oazapfts.json({
        ...opts,
        method: "PUT",
        body: projectSettings
    }));
}
/**
 * Find all tasks for project.
 */
export function projectTaskSearch(projectId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTaskRead;
    }>(`/project/task${QS.query(QS.explode({
        projectId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get project template by ID.
 */
export function projectTemplateGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectTemplate;
    }>(`/project/template/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get prospect by ID.
 */
export function crmProspectGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProspect;
    }>(`/crm/prospect/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find prospects corresponding with sent data.
 */
export function crmProspectSearch({ name, description, createdDateFrom, createdDateTo, customerId, salesEmployeeId, isClosed, closedReason, closedDateFrom, closedDateTo, competitor, prospectType, projectId, projectOfferId, $from, count, sorting, fields }: {
    name?: string;
    description?: string;
    createdDateFrom?: string;
    createdDateTo?: string;
    customerId?: string;
    salesEmployeeId?: string;
    isClosed?: boolean;
    closedReason?: string;
    closedDateFrom?: string;
    closedDateTo?: string;
    competitor?: string;
    prospectType?: string;
    projectId?: string;
    projectOfferId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProspectRead;
    }>(`/crm/prospect${QS.query(QS.explode({
        name,
        description,
        createdDateFrom,
        createdDateTo,
        customerId,
        salesEmployeeId,
        isClosed,
        closedReason,
        closedDateFrom,
        closedDateTo,
        competitor,
        prospectType,
        projectId,
        projectOfferId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find pickup point by ID.
 */
export function pickupPointGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPickupPoint;
    }>(`/pickupPoint/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Search pickup points.
 */
export function pickupPointSearch({ supplierId, transportTypeId, code, name, $from, count, sorting, fields }: {
    supplierId?: number[];
    transportTypeId?: number[];
    code?: string;
    name?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePickupPointRead;
    }>(`/pickupPoint${QS.query(QS.explode({
        supplierId,
        transportTypeId,
        code,
        name,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Find purchase order by ID.
 */
export function purchaseOrderGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Update purchase order.
 */
export function purchaseOrderPut(id: number, purchaseOrder?: PurchaseOrder, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: purchaseOrder
    }));
}
/**
 *  [BETA] Delete purchase order.
 */
export function purchaseOrderDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find purchase orders with send data
 */
export function purchaseOrderSearch({ $number, deliveryDateFrom, deliveryDateTo, creationDateFrom, creationDateTo, id, supplierId, projectId, isClosed, withDeviationOnly, $from, count, sorting, fields }: {
    $number?: string;
    deliveryDateFrom?: string;
    deliveryDateTo?: string;
    creationDateFrom?: string;
    creationDateTo?: string;
    id?: string;
    supplierId?: string;
    projectId?: string;
    isClosed?: boolean;
    withDeviationOnly?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderRead;
    }>(`/purchaseOrder${QS.query(QS.explode({
        "number": $number,
        deliveryDateFrom,
        deliveryDateTo,
        creationDateFrom,
        creationDateTo,
        id,
        supplierId,
        projectId,
        isClosed,
        withDeviationOnly,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Creates a new purchase order
 */
export function purchaseOrderPost(purchaseOrder?: PurchaseOrder, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>("/purchaseOrder", oazapfts.json({
        ...opts,
        method: "POST",
        body: purchaseOrder
    }));
}
/**
 * [BETA] Send purchase order by id and sendType.
 */
export function purchaseOrderSendSend(id: number, { sendType }: {
    sendType?: "DEFAULT" | "EMAIL" | "FTP";
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${encodeURIComponent(id)}/:send${QS.query(QS.explode({
        sendType
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Upload attachment to Purchase Order.
 */
export function purchaseOrderAttachmentUploadAttachment(id: number, body: {
    file: Blob;
}, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${encodeURIComponent(id)}/attachment${QS.query(QS.explode({
        fields
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete attachment.
 */
export function purchaseOrderAttachmentDeleteAttachment(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/${encodeURIComponent(id)}/attachment`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Upload multiple attachments to Purchase Order.
 */
export function purchaseOrderAttachmentListUploadAttachments(id: number, formDataMultiPart: FormDataMultiPart, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${encodeURIComponent(id)}/attachment/list`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: formDataMultiPart
    }));
}
/**
 * [BETA] Send purchase order by customisable email.
 */
export function purchaseOrderSendByEmailSendByEmail(id: number, purchaseOrderEmail?: PurchaseOrderEmail, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${encodeURIComponent(id)}/:sendByEmail`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: purchaseOrderEmail
    }));
}
/**
 *  [BETA] Find transport type by ID.
 */
export function transportTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTransportType;
    }>(`/transportType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Search transport type.
 */
export function transportTypeSearch({ supplierId, name, $from, count, sorting, fields }: {
    supplierId?: number[];
    name?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTransportTypeRead;
    }>(`/transportType${QS.query(QS.explode({
        supplierId,
        name,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Get deviation by order line ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeviation;
    }>(`/purchaseOrder/deviation/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update deviation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationPut(id: number, deviation?: Deviation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeviation;
    }>(`/purchaseOrder/deviation/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: deviation
    }));
}
/**
 * [BETA] Delete goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/deviation/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find handled deviations for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationSearch(purchaseOrderId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeviationRead;
    }>(`/purchaseOrder/deviation${QS.query(QS.explode({
        purchaseOrderId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Register deviation on goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationPost(deviation?: Deviation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeviation;
    }>("/purchaseOrder/deviation", oazapfts.json({
        ...opts,
        method: "POST",
        body: deviation
    }));
}
/**
 * [BETA] Register multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationListPostList(body?: Deviation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeviationRead;
    }>("/purchaseOrder/deviation/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationListPutList(body?: Deviation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeviationRead;
    }>("/purchaseOrder/deviation/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Approve deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationApproveApprove(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/deviation/${encodeURIComponent(id)}/:approve`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Send deviations to approval. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationDeliverDeliver(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/deviation/${encodeURIComponent(id)}/:deliver`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Undeliver the deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationUndeliverUndeliver(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/deviation/${encodeURIComponent(id)}/:undeliver`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptPut(id: number, goodsReceipt?: GoodsReceipt, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: goodsReceipt
    }));
}
/**
 * [BETA] Delete goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/goodsReceipt/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptSearch({ receivedDateFrom, receivedDateTo, status, withoutPurchase, $from, count, sorting, fields }: {
    receivedDateFrom?: string;
    receivedDateTo?: string;
    status?: "STATUS_OPEN" | "STATUS_CONFIRMED";
    withoutPurchase?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptRead;
    }>(`/purchaseOrder/goodsReceipt${QS.query(QS.explode({
        receivedDateFrom,
        receivedDateTo,
        status,
        withoutPurchase,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Register goods receipt without an existing purchase order. When registration of several goods receipt, use /list for better performance. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptPost(goodsReceipt?: GoodsReceipt, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt${QS.query(QS.explode({
        fields
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: goodsReceipt
    }));
}
/**
 * [BETA] Register multiple goods receipt without an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptListPostList(body?: GoodsReceipt[], { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptRead;
    }>(`/purchaseOrder/goodsReceipt/list${QS.query(QS.explode({
        fields
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete multiple goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/goodsReceipt/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Register goods receipt. Quantity received on the products is set to the same as quantity ordered. To update the quantity received, use PUT /purchaseOrder/goodsReceiptLine/{id}. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptRegisterGoodsReceiptRegisterGoodsReceipt(id: number, registrationDate: string, { inventoryId, comment, fields }: {
    inventoryId?: number;
    comment?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt/${encodeURIComponent(id)}/:registerGoodsReceipt${QS.query(QS.explode({
        registrationDate,
        inventoryId,
        comment,
        fields
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Confirm goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptConfirmConfirm(id: number, { createRestOrder, fields }: {
    createRestOrder?: boolean;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/goodsReceipt/${encodeURIComponent(id)}/:confirm${QS.query(QS.explode({
        createRestOrder,
        fields
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA]  Receive all ordered products and approve goods receipt. Only available for users that have activated the Logistics/Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptReceiveAndConfirmReceiveAndConfirm(id: number, receivedDate: string, { inventoryId, fields }: {
    inventoryId?: number;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/goodsReceipt/${encodeURIComponent(id)}/:receiveAndConfirm${QS.query(QS.explode({
        receivedDate,
        inventoryId,
        fields
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get goods receipt line by purchase order line ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceiptLine;
    }>(`/purchaseOrder/goodsReceiptLine/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a goods receipt line on a goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLinePut(id: number, goodsReceiptLine?: GoodsReceiptLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceiptLine;
    }>(`/purchaseOrder/goodsReceiptLine/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: goodsReceiptLine
    }));
}
/**
 * [BETA] Delete goods receipt line by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/goodsReceiptLine/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find goods receipt lines for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineSearch(purchaseOrderId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptLineRead;
    }>(`/purchaseOrder/goodsReceiptLine${QS.query(QS.explode({
        purchaseOrderId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Register new goods receipt; new product on an existing purchase order. When registration of several goods receipt, use /list for better performance. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLinePost(goodsReceiptLine?: GoodsReceiptLine, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceiptLine;
    }>("/purchaseOrder/goodsReceiptLine", oazapfts.json({
        ...opts,
        method: "POST",
        body: goodsReceiptLine
    }));
}
/**
 * [BETA] Register multiple new goods receipt on an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineListPostList(body?: GoodsReceiptLine[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptLineRead;
    }>("/purchaseOrder/goodsReceiptLine/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update goods receipt lines on a goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineListPutList(body?: GoodsReceiptLine[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptLineRead;
    }>("/purchaseOrder/goodsReceiptLine/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Delete goods receipt lines by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineListDeleteList(body?: GoodsReceiptLine[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/purchaseOrder/goodsReceiptLine/list", oazapfts.json({
        ...opts,
        method: "DELETE",
        body
    }));
}
/**
 * [BETA] Find purchase order relation to voucher by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrderIncomingInvoiceRelation;
    }>(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Delete purchase order voucher relation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find purchase order relation to voucher with sent data. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationSearch({ id, orderOutId, voucherId, $from, count, sorting, fields }: {
    id?: string;
    orderOutId?: string;
    voucherId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderIncomingInvoiceRelationRead;
    }>(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation${QS.query(QS.explode({
        id,
        orderOutId,
        voucherId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create new relation between purchase order and a voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationPost(purchaseOrderIncomingInvoiceRelation?: PurchaseOrderIncomingInvoiceRelation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrderIncomingInvoiceRelation;
    }>("/purchaseOrder/purchaseOrderIncomingInvoiceRelation", oazapfts.json({
        ...opts,
        method: "POST",
        body: purchaseOrderIncomingInvoiceRelation
    }));
}
/**
 * [BETA] Create a new list of relations between purchase order and voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationListPostList(body?: PurchaseOrderIncomingInvoiceRelation[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderIncomingInvoiceRelationRead;
    }>("/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete multiple purchase order voucher relations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 *  [BETA] Find purchase order line by ID.
 */
export function purchaseOrderOrderlineGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrderline;
    }>(`/purchaseOrder/orderline/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Updates purchase order line
 */
export function purchaseOrderOrderlinePut(id: number, purchaseOrderline?: PurchaseOrderline, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrderline;
    }>(`/purchaseOrder/orderline/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: purchaseOrderline
    }));
}
/**
 *  [BETA] Delete purchase order line.
 */
export function purchaseOrderOrderlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/orderline/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 *  [BETA] Creates purchase order line.
 */
export function purchaseOrderOrderlinePost(purchaseOrderline?: PurchaseOrderline, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrderline;
    }>("/purchaseOrder/orderline", oazapfts.json({
        ...opts,
        method: "POST",
        body: purchaseOrderline
    }));
}
/**
 * Create list of new purchase order lines.
 */
export function purchaseOrderOrderlineListPostList(body?: PurchaseOrderline[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderlineRead;
    }>("/purchaseOrder/orderline/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update a list of purchase order lines.
 */
export function purchaseOrderOrderlineListPutList(body?: PurchaseOrderline[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderlineRead;
    }>("/purchaseOrder/orderline/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Delete purchase order lines by ID.
 */
export function purchaseOrderOrderlineListDeleteList(body?: PurchaseOrderline[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/purchaseOrder/orderline/list", oazapfts.json({
        ...opts,
        method: "DELETE",
        body
    }));
}
/**
 * Get reminder by ID.
 */
export function reminderGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperReminder;
    }>(`/reminder/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find reminders corresponding with sent data.
 */
export function reminderSearch(dateFrom: string, dateTo: string, { id, termOfPaymentTo, termOfPaymentFrom, invoiceId, customerId, $from, count, sorting, fields }: {
    id?: string;
    termOfPaymentTo?: string;
    termOfPaymentFrom?: string;
    invoiceId?: number;
    customerId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseReminderRead;
    }>(`/reminder${QS.query(QS.explode({
        id,
        dateFrom,
        dateTo,
        termOfPaymentTo,
        termOfPaymentFrom,
        invoiceId,
        customerId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get reminder document by reminder ID.
 */
export function reminderPdfDownloadPdf(reminderId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/reminder/${encodeURIComponent(reminderId)}/pdf`, {
        ...opts
    });
}
/**
 * Gets information about user permissions when editing a job
 */
export function internalResourcePlan2PermissionsModalGetModal(jobId: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperRp2ModalPermissionsDto;
    }>(`/internal/resourcePlan2/permissions/modal/${encodeURIComponent(jobId)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find result budgets corresponding with sent data. Either specify the ids of the departments, projects, products or employees to return result budgets for, or use the boolean parameters includeAll***ResultBudgets to get all results budgets.
 */
export function resultbudgetSearch({ departmentIds, projectIds, productIds, employeeIds, year, includeAllDepartmentResultBudgets, includeAllProjectResultBudgets, includeAllProductResultBudgets, includeAllEmployeeResultBudgets, $from, count, sorting, fields }: {
    departmentIds?: string;
    projectIds?: string;
    productIds?: string;
    employeeIds?: string;
    year?: number;
    includeAllDepartmentResultBudgets?: boolean;
    includeAllProjectResultBudgets?: boolean;
    includeAllProductResultBudgets?: boolean;
    includeAllEmployeeResultBudgets?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudgetRead;
    }>(`/resultbudget${QS.query(QS.explode({
        departmentIds,
        projectIds,
        productIds,
        employeeIds,
        year,
        includeAllDepartmentResultBudgets,
        includeAllProjectResultBudgets,
        includeAllProductResultBudgets,
        includeAllEmployeeResultBudgets,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get result budget for company
 */
export function resultbudgetCompanyGetCompanyResultBudget({ year, $from, count, sorting, fields }: {
    year?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudgetRead;
    }>(`/resultbudget/company${QS.query(QS.explode({
        year,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get result budget associated with a departmentId
 */
export function resultbudgetDepartmentGetDepartmentResultBudget(id: number, { year, $from, count, sorting, fields }: {
    year?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudgetRead;
    }>(`/resultbudget/department/${encodeURIComponent(id)}${QS.query(QS.explode({
        year,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get result budget associated with a projectId
 */
export function resultbudgetProjectGetProjectResultBudget(id: number, { year, $from, count, sorting, fields }: {
    year?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudgetRead;
    }>(`/resultbudget/project/${encodeURIComponent(id)}${QS.query(QS.explode({
        year,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get result budget associated with a productId
 */
export function resultbudgetProductGetProductResultBudget(id: number, { year, $from, count, sorting, fields }: {
    year?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudgetRead;
    }>(`/resultbudget/product/${encodeURIComponent(id)}${QS.query(QS.explode({
        year,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get result budget associated with an employeeId
 */
export function resultbudgetEmployeeGetEmployeeResultBudget(id: number, { year, $from, count, sorting, fields }: {
    year?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudgetRead;
    }>(`/resultbudget/employee/${encodeURIComponent(id)}${QS.query(QS.explode({
        year,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Import SAF-T. Send XML file as multipart form.
 */
export function saftImportSaftImportSaft(body: {
    saftFile: Blob;
    mappingFile: Blob;
    importCustomerVendors: boolean;
    createMissingAccounts: boolean;
    importStartBalanceFromOpening: boolean;
    importStartBalanceFromClosing: boolean;
    importVouchers: boolean;
    importDepartments: boolean;
    importProjects: boolean;
    tripletexGeneratesCustomerNumbers: boolean;
    createCustomerIB: boolean;
    updateAccountNames: boolean;
    createVendorIB: boolean;
    overrideVoucherDateOnDiscrepancy: boolean;
    overwriteCustomersContacts: boolean;
    onlyActiveCustomers: boolean;
    onlyActiveAccounts: boolean;
    updateStartBalance: boolean;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/saft/importSAFT", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Create SAF-T export for the Tripletex account.
 */
export function saftExportSaftExportSaft(year: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/saft/exportSAFT${QS.query(QS.explode({
        year
    }))}`, {
        ...opts
    });
}
/**
 * Find salary type by ID.
 */
export function salaryTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryType;
    }>(`/salary/type/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find salary type corresponding with sent data.
 */
export function salaryTypeSearch({ id, $number, name, description, showInTimesheet, isInactive, employeeIds, $from, count, sorting, fields }: {
    id?: string;
    $number?: string;
    name?: string;
    description?: string;
    showInTimesheet?: boolean;
    isInactive?: boolean;
    employeeIds?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSalaryTypeRead;
    }>(`/salary/type${QS.query(QS.explode({
        id,
        "number": $number,
        name,
        description,
        showInTimesheet,
        isInactive,
        employeeIds,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find salary compilation by employee.
 */
export function salaryCompilationGet(employeeId: number, { year, fields }: {
    year?: number;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryCompilation;
    }>(`/salary/compilation${QS.query(QS.explode({
        employeeId,
        year,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find salary compilation (PDF document) by employee.
 */
export function salaryCompilationPdfDownloadPdf(employeeId: number, { year }: {
    year?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/salary/compilation/pdf${QS.query(QS.explode({
        employeeId,
        year
    }))}`, {
        ...opts
    });
}
/**
 * Find payslip by ID.
 */
export function salaryPayslipGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPayslip;
    }>(`/salary/payslip/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payslips corresponding with sent data.
 */
export function salaryPayslipSearch({ id, employeeId, wageTransactionId, activityId, yearFrom, yearTo, monthFrom, monthTo, voucherDateFrom, voucherDateTo, comment, $from, count, sorting, fields }: {
    id?: string;
    employeeId?: string;
    wageTransactionId?: string;
    activityId?: string;
    yearFrom?: number;
    yearTo?: number;
    monthFrom?: number;
    monthTo?: number;
    voucherDateFrom?: string;
    voucherDateTo?: string;
    comment?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePayslipRead;
    }>(`/salary/payslip${QS.query(QS.explode({
        id,
        employeeId,
        wageTransactionId,
        activityId,
        yearFrom,
        yearTo,
        monthFrom,
        monthTo,
        voucherDateFrom,
        voucherDateTo,
        comment,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payslip (PDF document) by ID.
 */
export function salaryPayslipPdfDownloadPdf(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/salary/payslip/${encodeURIComponent(id)}/pdf`, {
        ...opts
    });
}
/**
 * Get salary settings of logged in company.
 */
export function salarySettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalarySettings;
    }>(`/salary/settings${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update settings of logged in company.
 */
export function salarySettingsPut(salarySettings?: SalarySettings, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalarySettings;
    }>("/salary/settings", oazapfts.json({
        ...opts,
        method: "PUT",
        body: salarySettings
    }));
}
/**
 * Update a holiday setting of current logged in company.
 */
export function salarySettingsHolidayPut(id: number, companyHoliday?: CompanyHoliday, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHoliday;
    }>(`/salary/settings/holiday/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: companyHoliday
    }));
}
/**
 * Find holiday settings of current logged in company.
 */
export function salarySettingsHolidaySearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHolidayRead;
    }>(`/salary/settings/holiday${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a holiday setting of current logged in company.
 */
export function salarySettingsHolidayPost(companyHoliday?: CompanyHoliday, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHoliday;
    }>("/salary/settings/holiday", oazapfts.json({
        ...opts,
        method: "POST",
        body: companyHoliday
    }));
}
/**
 * Create multiple holiday settings of current logged in company.
 */
export function salarySettingsHolidayListPostList(body?: CompanyHoliday[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHolidayRead;
    }>("/salary/settings/holiday/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple holiday settings of current logged in company.
 */
export function salarySettingsHolidayListPutList(body?: CompanyHoliday[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHolidayRead;
    }>("/salary/settings/holiday/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete multiple holiday settings of current logged in company.
 */
export function salarySettingsHolidayListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/settings/holiday/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get Pension Scheme for a specific ID
 */
export function salarySettingsPensionSchemeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPensionScheme;
    }>(`/salary/settings/pensionScheme/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a Pension Scheme
 */
export function salarySettingsPensionSchemePut(id: number, pensionScheme?: PensionScheme, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPensionScheme;
    }>(`/salary/settings/pensionScheme/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: pensionScheme
    }));
}
/**
 * Delete a Pension Scheme
 */
export function salarySettingsPensionSchemeDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/settings/pensionScheme/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find pension schemes.
 */
export function salarySettingsPensionSchemeSearch({ $number, $from, count, sorting, fields }: {
    $number?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePensionSchemeRead;
    }>(`/salary/settings/pensionScheme${QS.query(QS.explode({
        "number": $number,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a Pension Scheme.
 */
export function salarySettingsPensionSchemePost(pensionScheme?: PensionScheme, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPensionScheme;
    }>("/salary/settings/pensionScheme", oazapfts.json({
        ...opts,
        method: "POST",
        body: pensionScheme
    }));
}
/**
 * Create multiple Pension Schemes.
 */
export function salarySettingsPensionSchemeListPostList(body?: PensionScheme[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePensionSchemeRead;
    }>("/salary/settings/pensionScheme/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update multiple Pension Schemes.
 */
export function salarySettingsPensionSchemeListPutList(body?: PensionScheme[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePensionSchemeRead;
    }>("/salary/settings/pensionScheme/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete multiple Pension Schemes.
 */
export function salarySettingsPensionSchemeListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/settings/pensionScheme/list${QS.query(QS.explode({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find standard time by ID.
 */
export function salarySettingsStandardTimeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyStandardTime;
    }>(`/salary/settings/standardTime/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update standard time.
 */
export function salarySettingsStandardTimePut(id: number, companyStandardTime?: CompanyStandardTime, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyStandardTime;
    }>(`/salary/settings/standardTime/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: companyStandardTime
    }));
}
/**
 * Get all standard times.
 */
export function salarySettingsStandardTimeSearch({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyStandardTimeRead;
    }>(`/salary/settings/standardTime${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create standard time.
 */
export function salarySettingsStandardTimePost(companyStandardTime?: CompanyStandardTime, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyStandardTime;
    }>("/salary/settings/standardTime", oazapfts.json({
        ...opts,
        method: "POST",
        body: companyStandardTime
    }));
}
/**
 * Find standard time by date
 */
export function salarySettingsStandardTimeByDateGetByDate({ date, fields }: {
    date?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyStandardTime;
    }>(`/salary/settings/standardTime/byDate${QS.query(QS.explode({
        date,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find salary transaction by ID.
 */
export function salaryTransactionGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryTransaction;
    }>(`/salary/transaction/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete salary transaction by ID.
 */
export function salaryTransactionDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/transaction/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create a new salary transaction.
 */
export function salaryTransactionPost(salaryTransaction?: SalaryTransaction, { generateTaxDeduction }: {
    generateTaxDeduction?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryTransaction;
    }>(`/salary/transaction${QS.query(QS.explode({
        generateTaxDeduction
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: salaryTransaction
    }));
}
/**
 * Upload an attachment to a salary transaction
 */
export function salaryTransactionAttachmentUploadAttachment(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInteger;
    }>(`/salary/transaction/${encodeURIComponent(id)}/attachment`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Upload multiple attachments to a salary transaction
 */
export function salaryTransactionAttachmentListUploadAttachments(id: number, formDataMultiPart: FormDataMultiPart, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInteger;
    }>(`/salary/transaction/${encodeURIComponent(id)}/attachment/list`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: formDataMultiPart
    }));
}
/**
 * Delete attachment.
 */
export function salaryTransactionDeleteAttachmentDeleteAttachment(id: number, { sendToVoucherInbox, split }: {
    sendToVoucherInbox?: boolean;
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/transaction/${encodeURIComponent(id)}/deleteAttachment${QS.query(QS.explode({
        sendToVoucherInbox,
        split
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get supplier by ID.
 */
export function supplierGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplier;
    }>(`/supplier/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update supplier.
 */
export function supplierPut(id: number, supplier?: Supplier, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplier;
    }>(`/supplier/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: supplier
    }));
}
/**
 * [BETA] Delete supplier by ID
 */
export function supplierDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/supplier/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find suppliers corresponding with sent data.
 */
export function supplierSearch({ id, supplierNumber, organizationNumber, email, invoiceEmail, isInactive, accountManagerId, changedSince, isWholesaler, showProducts, $from, count, sorting, fields }: {
    id?: string;
    supplierNumber?: string;
    organizationNumber?: string;
    email?: string;
    invoiceEmail?: string;
    isInactive?: boolean;
    accountManagerId?: string;
    changedSince?: string;
    isWholesaler?: boolean;
    showProducts?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierRead;
    }>(`/supplier${QS.query(QS.explode({
        id,
        supplierNumber,
        organizationNumber,
        email,
        invoiceEmail,
        isInactive,
        accountManagerId,
        changedSince,
        isWholesaler,
        showProducts,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create supplier. Related supplier addresses may also be created.
 */
export function supplierPost(supplier?: Supplier, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplier;
    }>("/supplier", oazapfts.json({
        ...opts,
        method: "POST",
        body: supplier
    }));
}
/**
 * [BETA] Create multiple suppliers. Related supplier addresses may also be created.
 */
export function supplierListPostList(body?: Supplier[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierRead;
    }>("/supplier/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update multiple suppliers. Addresses can also be updated.
 */
export function supplierListPutList(body?: Supplier[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierRead;
    }>("/supplier/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Get supplierInvoice by ID.
 */
export function supplierInvoiceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find supplierInvoices corresponding with sent data.
 */
export function supplierInvoiceSearch(invoiceDateFrom: string, invoiceDateTo: string, { id, invoiceNumber, kid, voucherId, supplierId, $from, count, sorting, fields }: {
    id?: string;
    invoiceNumber?: string;
    kid?: string;
    voucherId?: string;
    supplierId?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoiceRead;
    }>(`/supplierInvoice${QS.query(QS.explode({
        id,
        invoiceDateFrom,
        invoiceDateTo,
        invoiceNumber,
        kid,
        voucherId,
        supplierId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Approve supplier invoice.
 */
export function supplierInvoiceApproveApprove(invoiceId: number, { comment }: {
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${encodeURIComponent(invoiceId)}/:approve${QS.query(QS.explode({
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get supplierInvoices for approval
 */
export function supplierInvoiceForApprovalGetApprovalInvoices({ searchText, showAll, employeeId, $from, count, sorting, fields }: {
    searchText?: string;
    showAll?: boolean;
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoiceRead;
    }>(`/supplierInvoice/forApproval${QS.query(QS.explode({
        searchText,
        showAll,
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get supplierInvoice document by invoice ID.
 */
export function supplierInvoicePdfDownloadPdf(invoiceId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/supplierInvoice/${encodeURIComponent(invoiceId)}/pdf`, {
        ...opts
    });
}
/**
 * [BETA] Put debit postings.
 */
export function supplierInvoiceVoucherPostingsPutPostings(id: number, body?: OrderLinePostingDto[], { sendToLedger, voucherDate }: {
    sendToLedger?: boolean;
    voucherDate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/voucher/${encodeURIComponent(id)}/postings${QS.query(QS.explode({
        sendToLedger,
        voucherDate
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Approve supplier invoices.
 */
export function supplierInvoiceApproveApproveMany({ invoiceIds, comment }: {
    invoiceIds?: string;
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoiceRead;
    }>(`/supplierInvoice/:approve${QS.query(QS.explode({
        invoiceIds,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Add recipient.
 */
export function supplierInvoiceAddRecipientAddRecipientToMany(employeeId: number, { invoiceIds, comment }: {
    invoiceIds?: string;
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoiceRead;
    }>(`/supplierInvoice/:addRecipient${QS.query(QS.explode({
        employeeId,
        invoiceIds,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Add recipient to supplier invoices.
 */
export function supplierInvoiceAddRecipientAddRecipient(invoiceId: number, employeeId: number, { comment }: {
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${encodeURIComponent(invoiceId)}/:addRecipient${QS.query(QS.explode({
        employeeId,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * reject supplier invoices.
 */
export function supplierInvoiceRejectRejectMany(comment: string, { invoiceIds }: {
    invoiceIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoiceRead;
    }>(`/supplierInvoice/:reject${QS.query(QS.explode({
        comment,
        invoiceIds
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Change dimension on a supplier invoice.
 */
export function supplierInvoiceChangeDimensionChangeDimensionMany(invoiceId: number, dimension: "PROJECT" | "DEPARTMENT" | "EMPLOYEE" | "PRODUCT", dimensionId: number, { debitPostingIds }: {
    debitPostingIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${encodeURIComponent(invoiceId)}/:changeDimension${QS.query(QS.explode({
        debitPostingIds,
        dimension,
        dimensionId
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Register payment, paymentType == 0 finds the last paymentType for this vendor
 */
export function supplierInvoiceAddPaymentAddPayment(invoiceId: number, paymentType: number, { amount, kidOrReceiverReference, bban, paymentDate, useDefaultPaymentType, partialPayment }: {
    amount?: string;
    kidOrReceiverReference?: string;
    bban?: string;
    paymentDate?: string;
    useDefaultPaymentType?: boolean;
    partialPayment?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${encodeURIComponent(invoiceId)}/:addPayment${QS.query(QS.explode({
        paymentType,
        amount,
        kidOrReceiverReference,
        bban,
        paymentDate,
        useDefaultPaymentType,
        partialPayment
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * reject supplier invoice.
 */
export function supplierInvoiceRejectReject(invoiceId: number, comment: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${encodeURIComponent(invoiceId)}/:reject${QS.query(QS.explode({
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get by ID.
 */
export function voucherApprovalListElementGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherApprovalListElement;
    }>(`/voucherApprovalListElement/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find allocated hour entry by ID.
 */
export function timesheetAllocatedGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetAllocated;
    }>(`/timesheet/allocated/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update allocated hour entry by ID. Note: Allocated hour entry object fields which are present but not set, or set to 0, will be nulled. Only holiday/vacation hours can receive comments. A notification will be sent to the entry's employee if the entry's comment has changed.
 */
export function timesheetAllocatedPut(id: number, timesheetAllocated?: TimesheetAllocated, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetAllocated;
    }>(`/timesheet/allocated/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: timesheetAllocated
    }));
}
/**
 * Delete allocated hour entry by ID.
 */
export function timesheetAllocatedDelete(id: number, { version }: {
    version?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/allocated/${encodeURIComponent(id)}${QS.query(QS.explode({
        version
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find allocated hour entries corresponding with sent data.
 */
export function timesheetAllocatedSearch({ ids, employeeIds, projectIds, activityIds, dateFrom, dateTo, $from, count, sorting, fields }: {
    ids?: string;
    employeeIds?: string;
    projectIds?: string;
    activityIds?: string;
    dateFrom?: string;
    dateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetAllocatedRead;
    }>(`/timesheet/allocated${QS.query(QS.explode({
        ids,
        employeeIds,
        projectIds,
        activityIds,
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new allocated hour entry. Only one entry per employee/date/activity/project combination is supported. Only holiday/vacation hours can receive comments. A notification will be sent to the entry's employee if the entry has a comment.
 */
export function timesheetAllocatedPost(timesheetAllocated?: TimesheetAllocated, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetAllocated;
    }>("/timesheet/allocated", oazapfts.json({
        ...opts,
        method: "POST",
        body: timesheetAllocated
    }));
}
/**
 * Add new allocated hour entry. Multiple objects for several users can be sent in the same request. Only holiday/vacation hours can receive comments. Notifications will be sent to the entries' employees if the entries have comments.
 */
export function timesheetAllocatedListPostList(body?: TimesheetAllocated[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetAllocatedRead;
    }>("/timesheet/allocated/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update allocated hour entry. Multiple objects for different users can be sent in the same request. Note: Allocated hour entry object fields which are present but not set, or set to 0, will be nulled. Only holiday/vacation hours can receive comments. Notifications will be sent to the entries' employees if the entries' comments have changed.
 */
export function timesheetAllocatedListPutList(body?: TimesheetAllocated[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetAllocatedRead;
    }>("/timesheet/allocated/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Only for allocated hours on the company's internal holiday/vacation activity. Mark the allocated hour entry as approved. The hours will be copied to the time sheet. A notification will be sent to the entry's employee if the entry's approval status or comment has changed.
 */
export function timesheetAllocatedApproveApprove(id: number, { managerComment }: {
    managerComment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetAllocated;
    }>(`/timesheet/allocated/${encodeURIComponent(id)}/:approve${QS.query(QS.explode({
        managerComment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Only for allocated hours on the company's internal holiday/vacation activity. Mark the allocated hour entry as unapproved. A notification will be sent to the entry's employee if the entry's approval status or comment has changed.
 */
export function timesheetAllocatedUnapproveUnapprove(id: number, { managerComment }: {
    managerComment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetAllocated;
    }>(`/timesheet/allocated/${encodeURIComponent(id)}/:unapprove${QS.query(QS.explode({
        managerComment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Only for allocated hours on the company's internal holiday/vacation activity. Mark the allocated hour entry/entries as approved. The hours will be copied to the time sheet. Notifications will be sent to the entries' employees if the entries' approval statuses or comments have changed. If IDs are provided, the other args are ignored.
 */
export function timesheetAllocatedApproveListApproveList({ ids, employeeIds, dateFrom, dateTo, managerComment }: {
    ids?: string;
    employeeIds?: string;
    dateFrom?: string;
    dateTo?: string;
    managerComment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetAllocatedRead;
    }>(`/timesheet/allocated/:approveList${QS.query(QS.explode({
        ids,
        employeeIds,
        dateFrom,
        dateTo,
        managerComment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Only for allocated hours on the company's internal holiday/vacation activity. Mark the allocated hour entry/entries as unapproved. Notifications will be sent to the entries' employees if the entries' approval statuses or comments have changed. If IDs are provided, the other args are ignored.
 */
export function timesheetAllocatedUnapproveListUnapproveList({ ids, employeeIds, dateFrom, dateTo, managerComment }: {
    ids?: string;
    employeeIds?: string;
    dateFrom?: string;
    dateTo?: string;
    managerComment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetAllocatedRead;
    }>(`/timesheet/allocated/:unapproveList${QS.query(QS.explode({
        ids,
        employeeIds,
        dateFrom,
        dateTo,
        managerComment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get company holiday by its ID
 */
export function timesheetCompanyHolidayGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHolidays;
    }>(`/timesheet/companyHoliday/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a company holiday
 */
export function timesheetCompanyHolidayPut(id: number, companyHolidays?: CompanyHolidays, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHolidays;
    }>(`/timesheet/companyHoliday/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: companyHolidays
    }));
}
/**
 * [BETA] Delete a company holiday
 */
export function timesheetCompanyHolidayDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/companyHoliday/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Search for company holidays by id or year.
 */
export function timesheetCompanyHolidaySearch({ ids, years, $from, count, sorting, fields }: {
    ids?: string;
    years?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHolidaysRead;
    }>(`/timesheet/companyHoliday${QS.query(QS.explode({
        ids,
        years,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a company holiday
 */
export function timesheetCompanyHolidayPost(companyHolidays?: CompanyHolidays, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHolidays;
    }>("/timesheet/companyHoliday", oazapfts.json({
        ...opts,
        method: "POST",
        body: companyHolidays
    }));
}
/**
 * Find timesheet entry by ID.
 */
export function timesheetEntryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetEntry;
    }>(`/timesheet/entry/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
 */
export function timesheetEntryPut(id: number, timesheetEntry?: TimesheetEntry, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetEntry;
    }>(`/timesheet/entry/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: timesheetEntry
    }));
}
/**
 * Delete timesheet entry by ID.
 */
export function timesheetEntryDelete(id: number, { version }: {
    version?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/entry/${encodeURIComponent(id)}${QS.query(QS.explode({
        version
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find timesheet entry corresponding with sent data.
 */
export function timesheetEntrySearch(dateFrom: string, dateTo: string, { id, employeeId, projectId, activityId, comment, $from, count, sorting, fields }: {
    id?: string;
    employeeId?: string;
    projectId?: string;
    activityId?: string;
    comment?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: TimesheetEntrySearchResponseRead;
    }>(`/timesheet/entry${QS.query(QS.explode({
        id,
        employeeId,
        projectId,
        activityId,
        dateFrom,
        dateTo,
        comment,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
 */
export function timesheetEntryPost(timesheetEntry?: TimesheetEntry, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetEntry;
    }>("/timesheet/entry", oazapfts.json({
        ...opts,
        method: "POST",
        body: timesheetEntry
    }));
}
/**
 * Add new timesheet entry. Multiple objects for several users can be sent in the same request.
 */
export function timesheetEntryListPostList(body?: TimesheetEntry[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetEntryRead;
    }>("/timesheet/entry/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update timesheet entry. Multiple objects for different users can be sent in the same request.
 */
export function timesheetEntryListPutList(body?: TimesheetEntry[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetEntryRead;
    }>("/timesheet/entry/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Find projects with recent activities (timesheet entry registered).
 */
export function timesheetEntryRecentProjectsGetRecentProjects({ employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectRead;
    }>(`/timesheet/entry/>recentProjects${QS.query(QS.explode({
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find recently used timesheet activities.
 */
export function timesheetEntryRecentActivitiesGetRecentActivities(projectId: number, { employeeId, $from, count, sorting, fields }: {
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivityRead;
    }>(`/timesheet/entry/>recentActivities${QS.query(QS.explode({
        employeeId,
        projectId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find total hours registered on an employee in a specific period.
 */
export function timesheetEntryTotalHoursGetTotalHours({ employeeId, startDate, endDate, fields }: {
    employeeId?: number;
    startDate?: string;
    endDate?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBigDecimal;
    }>(`/timesheet/entry/>totalHours${QS.query(QS.explode({
        employeeId,
        startDate,
        endDate,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find monthly status entry by ID.
 */
export function timesheetMonthGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMonthlyStatus;
    }>(`/timesheet/month/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * complete month(s).  If id is provided the other args are ignored
 */
export function timesheetMonthCompleteComplete({ id, employeeIds, monthYear }: {
    id?: number;
    employeeIds?: string;
    monthYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMonthlyStatusRead;
    }>(`/timesheet/month/:complete${QS.query(QS.explode({
        id,
        employeeIds,
        monthYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * approve month(s).  If id is provided the other args are ignored
 */
export function timesheetMonthApproveApprove({ id, employeeIds, monthYear, approvedUntilDate }: {
    id?: number;
    employeeIds?: string;
    monthYear?: string;
    approvedUntilDate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMonthlyStatusRead;
    }>(`/timesheet/month/:approve${QS.query(QS.explode({
        id,
        employeeIds,
        monthYear,
        approvedUntilDate
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * unapprove month(s).  If id is provided the other args are ignored
 */
export function timesheetMonthUnapproveUnapprove({ id, employeeIds, monthYear }: {
    id?: number;
    employeeIds?: string;
    monthYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMonthlyStatusRead;
    }>(`/timesheet/month/:unapprove${QS.query(QS.explode({
        id,
        employeeIds,
        monthYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * reopen month(s).  If id is provided the other args are ignored
 */
export function timesheetMonthReopenReopen({ id, employeeIds, monthYear }: {
    id?: number;
    employeeIds?: string;
    monthYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMonthlyStatusRead;
    }>(`/timesheet/month/:reopen${QS.query(QS.explode({
        id,
        employeeIds,
        monthYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find monthly status for given month.
 */
export function timesheetMonthByMonthNumberGetByMonthNumber(employeeIds: string, monthYear: string, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMonthlyStatusRead;
    }>(`/timesheet/month/byMonthNumber${QS.query(QS.explode({
        employeeIds,
        monthYear,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get timesheet ProjectSalaryType Specification for a specific ID (PILOT USERS ONLY)
 */
export function timesheetSalaryProjectTypeSpecificationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetProjectSalaryTypeSpecification;
    }>(`/timesheet/salaryProjectTypeSpecification/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a timesheet ProjectSalaryType Specification (PILOT USERS ONLY)
 */
export function timesheetSalaryProjectTypeSpecificationPut(id: number, timesheetProjectSalaryTypeSpecification?: TimesheetProjectSalaryTypeSpecification, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetProjectSalaryTypeSpecification;
    }>(`/timesheet/salaryProjectTypeSpecification/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: timesheetProjectSalaryTypeSpecification
    }));
}
/**
 * [BETA] Delete a timesheet SalaryType Specification (PILOT USERS ONLY)
 */
export function timesheetSalaryProjectTypeSpecificationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/salaryProjectTypeSpecification/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get list of timesheet ProjectSalaryType Specifications (PILOT USERS ONLY)
 */
export function timesheetSalaryProjectTypeSpecificationSearch({ dateFrom, dateTo, employeeId, projectId, $from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    employeeId?: number;
    projectId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetProjectSalaryTypeSpecificationRead;
    }>(`/timesheet/salaryProjectTypeSpecification${QS.query(QS.explode({
        dateFrom,
        dateTo,
        employeeId,
        projectId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a timesheet ProjectSalaryType Specification. (PILOT USERS ONLY)
 */
export function timesheetSalaryProjectTypeSpecificationPost(timesheetProjectSalaryTypeSpecification?: TimesheetProjectSalaryTypeSpecification, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetProjectSalaryTypeSpecification;
    }>("/timesheet/salaryProjectTypeSpecification", oazapfts.json({
        ...opts,
        method: "POST",
        body: timesheetProjectSalaryTypeSpecification
    }));
}
/**
 * [BETA] Get timesheet SalaryType Specification for a specific ID
 */
export function timesheetSalaryTypeSpecificationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetSalaryTypeSpecification;
    }>(`/timesheet/salaryTypeSpecification/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a timesheet SalaryType Specification
 */
export function timesheetSalaryTypeSpecificationPut(id: number, timesheetSalaryTypeSpecification?: TimesheetSalaryTypeSpecification, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetSalaryTypeSpecification;
    }>(`/timesheet/salaryTypeSpecification/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: timesheetSalaryTypeSpecification
    }));
}
/**
 * [BETA] Delete a timesheet SalaryType Specification
 */
export function timesheetSalaryTypeSpecificationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/salaryTypeSpecification/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get list of timesheet SalaryType Specifications
 */
export function timesheetSalaryTypeSpecificationSearch({ dateFrom, dateTo, employeeId, $from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    employeeId?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetSalaryTypeSpecificationRead;
    }>(`/timesheet/salaryTypeSpecification${QS.query(QS.explode({
        dateFrom,
        dateTo,
        employeeId,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a timesheet SalaryType Specification. Only one entry per employee/date/SalaryType
 */
export function timesheetSalaryTypeSpecificationPost(timesheetSalaryTypeSpecification?: TimesheetSalaryTypeSpecification, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetSalaryTypeSpecification;
    }>("/timesheet/salaryTypeSpecification", oazapfts.json({
        ...opts,
        method: "POST",
        body: timesheetSalaryTypeSpecification
    }));
}
/**
 * [BETA] Get timesheet settings of logged in company.
 */
export function timesheetSettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetSettings;
    }>(`/timesheet/settings${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find time clock entry by ID.
 */
export function timesheetTimeClockGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimeClock;
    }>(`/timesheet/timeClock/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update time clock by ID.
 */
export function timesheetTimeClockPut(id: number, timeClock?: TimeClock, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimeClock;
    }>(`/timesheet/timeClock/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: timeClock
    }));
}
/**
 * Start time clock.
 */
export function timesheetTimeClockStartStart(activityId: number, { employeeId, projectId, date, lunchBreakDuration }: {
    employeeId?: number;
    projectId?: number;
    date?: string;
    lunchBreakDuration?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimeClock;
    }>(`/timesheet/timeClock/:start${QS.query(QS.explode({
        employeeId,
        projectId,
        activityId,
        date,
        lunchBreakDuration
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Stop time clock.
 */
export function timesheetTimeClockStopStop(id: number, { version }: {
    version?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/timeClock/${encodeURIComponent(id)}/:stop${QS.query(QS.explode({
        version
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find time clock entries corresponding with sent data.
 */
export function timesheetTimeClockSearch({ id, employeeId, projectId, activityId, dateFrom, dateTo, hourId, isRunning, $from, count, sorting, fields }: {
    id?: string;
    employeeId?: string;
    projectId?: string;
    activityId?: string;
    dateFrom?: string;
    dateTo?: string;
    hourId?: string;
    isRunning?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimeClockRead;
    }>(`/timesheet/timeClock${QS.query(QS.explode({
        id,
        employeeId,
        projectId,
        activityId,
        dateFrom,
        dateTo,
        hourId,
        isRunning,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find a user’s present running time clock.
 */
export function timesheetTimeClockPresentGetPresent({ employeeId, fields }: {
    employeeId?: number;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimeClock;
    }>(`/timesheet/timeClock/present${QS.query(QS.explode({
        employeeId,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find weekly status By ID, week/year combination, employeeId. or an approver
 */
export function timesheetWeekSearch({ ids, employeeIds, weekYear, approvedBy, $from, count, sorting, fields }: {
    ids?: string;
    employeeIds?: string;
    weekYear?: string;
    approvedBy?: number;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseWeekRead;
    }>(`/timesheet/week${QS.query(QS.explode({
        ids,
        employeeIds,
        weekYear,
        approvedBy,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Complete week. By ID or (ISO-8601 week and employeeId combination).
 */
export function timesheetWeekCompleteComplete({ id, employeeId, weekYear }: {
    id?: number;
    employeeId?: number;
    weekYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperWeek;
    }>(`/timesheet/week/:complete${QS.query(QS.explode({
        id,
        employeeId,
        weekYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Approve week. By ID or (ISO-8601 week and employeeId combination).
 */
export function timesheetWeekApproveApprove({ id, employeeId, weekYear }: {
    id?: number;
    employeeId?: number;
    weekYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperWeek;
    }>(`/timesheet/week/:approve${QS.query(QS.explode({
        id,
        employeeId,
        weekYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Unapprove week. By ID or (ISO-8601 week and employeeId combination).
 */
export function timesheetWeekUnapproveUnapprove({ id, employeeId, weekYear }: {
    id?: number;
    employeeId?: number;
    weekYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperWeek;
    }>(`/timesheet/week/:unapprove${QS.query(QS.explode({
        id,
        employeeId,
        weekYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Reopen week. By ID or (ISO-8601 week and employeeId combination).
 */
export function timesheetWeekReopenReopen({ id, employeeId, weekYear }: {
    id?: number;
    employeeId?: number;
    weekYear?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperWeek;
    }>(`/timesheet/week/:reopen${QS.query(QS.explode({
        id,
        employeeId,
        weekYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get travel accommodation allowance by ID.
 */
export function travelExpenseAccommodationAllowanceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccommodationAllowance;
    }>(`/travelExpense/accommodationAllowance/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update accommodation allowance.
 */
export function travelExpenseAccommodationAllowancePut(id: number, accommodationAllowance?: AccommodationAllowance, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccommodationAllowance;
    }>(`/travelExpense/accommodationAllowance/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: accommodationAllowance
    }));
}
/**
 * Delete accommodation allowance.
 */
export function travelExpenseAccommodationAllowanceDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/accommodationAllowance/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find accommodation allowances corresponding with sent data.
 */
export function travelExpenseAccommodationAllowanceSearch({ travelExpenseId, rateTypeId, rateCategoryId, rateFrom, rateTo, countFrom, countTo, amountFrom, amountTo, location, address, $from, count, sorting, fields }: {
    travelExpenseId?: string;
    rateTypeId?: string;
    rateCategoryId?: string;
    rateFrom?: string;
    rateTo?: string;
    countFrom?: number;
    countTo?: number;
    amountFrom?: string;
    amountTo?: string;
    location?: string;
    address?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccommodationAllowanceRead;
    }>(`/travelExpense/accommodationAllowance${QS.query(QS.explode({
        travelExpenseId,
        rateTypeId,
        rateCategoryId,
        rateFrom,
        rateTo,
        countFrom,
        countTo,
        amountFrom,
        amountTo,
        location,
        address,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create accommodation allowance.
 */
export function travelExpenseAccommodationAllowancePost(accommodationAllowance?: AccommodationAllowance, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccommodationAllowance;
    }>("/travelExpense/accommodationAllowance", oazapfts.json({
        ...opts,
        method: "POST",
        body: accommodationAllowance
    }));
}
/**
 * Get cost by ID.
 */
export function travelExpenseCostGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCost;
    }>(`/travelExpense/cost/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update cost.
 */
export function travelExpenseCostPut(id: number, cost?: Cost, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCost;
    }>(`/travelExpense/cost/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: cost
    }));
}
/**
 * Delete cost.
 */
export function travelExpenseCostDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/cost/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find costs corresponding with sent data.
 */
export function travelExpenseCostSearch({ travelExpenseId, vatTypeId, currencyId, rateFrom, rateTo, countFrom, countTo, amountFrom, amountTo, location, address, $from, count, sorting, fields }: {
    travelExpenseId?: string;
    vatTypeId?: string;
    currencyId?: string;
    rateFrom?: string;
    rateTo?: string;
    countFrom?: number;
    countTo?: number;
    amountFrom?: string;
    amountTo?: string;
    location?: string;
    address?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCostRead;
    }>(`/travelExpense/cost${QS.query(QS.explode({
        travelExpenseId,
        vatTypeId,
        currencyId,
        rateFrom,
        rateTo,
        countFrom,
        countTo,
        amountFrom,
        amountTo,
        location,
        address,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create cost.
 */
export function travelExpenseCostPost(cost?: Cost, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCost;
    }>("/travelExpense/cost", oazapfts.json({
        ...opts,
        method: "POST",
        body: cost
    }));
}
/**
 * Update costs.
 */
export function travelExpenseCostListPutList(body?: Cost[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCostRead;
    }>("/travelExpense/cost/list", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Get cost participant by ID.
 */
export function travelExpenseCostParticipantGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseParticipant;
    }>(`/travelExpense/costParticipant/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete cost participant.
 */
export function travelExpenseCostParticipantDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/costParticipant/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create participant on cost.
 */
export function travelExpenseCostParticipantPost(travelExpenseParticipant?: TravelExpenseParticipant, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseParticipant;
    }>("/travelExpense/costParticipant", oazapfts.json({
        ...opts,
        method: "POST",
        body: travelExpenseParticipant
    }));
}
/**
 * Get cost's participants by costId.
 */
export function travelExpenseCostParticipantCostParticipantsGetCostParticipants(costId: number, { $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseParticipantRead;
    }>(`/travelExpense/costParticipant/${encodeURIComponent(costId)}/costParticipants${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create participant on cost using explicit parameters
 */
export function travelExpenseCostParticipantCreateCostParticipantAdvancedCreateCostParticipantAdvanced(costId: number, employeeId: number, { displayName }: {
    displayName?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseParticipant;
    }>(`/travelExpense/costParticipant/createCostParticipantAdvanced${QS.query(QS.explode({
        displayName,
        costId,
        employeeId
    }))}`, {
        ...opts,
        method: "POST"
    });
}
/**
 * Get driving stop by ID.
 */
export function travelExpenseDrivingStopGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDrivingStop;
    }>(`/travelExpense/drivingStop/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete mileage allowance stops.
 */
export function travelExpenseDrivingStopDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/drivingStop/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create mileage allowance driving stop.
 */
export function travelExpenseDrivingStopPost(drivingStop?: DrivingStop, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDrivingStop;
    }>("/travelExpense/drivingStop", oazapfts.json({
        ...opts,
        method: "POST",
        body: drivingStop
    }));
}
/**
 * Get mileage allowance by ID.
 */
export function travelExpenseMileageAllowanceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMileageAllowance;
    }>(`/travelExpense/mileageAllowance/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update mileage allowance.
 */
export function travelExpenseMileageAllowancePut(id: number, mileageAllowance?: MileageAllowance, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMileageAllowance;
    }>(`/travelExpense/mileageAllowance/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: mileageAllowance
    }));
}
/**
 * Delete mileage allowance.
 */
export function travelExpenseMileageAllowanceDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/mileageAllowance/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find mileage allowances corresponding with sent data.
 */
export function travelExpenseMileageAllowanceSearch({ travelExpenseId, rateTypeId, rateCategoryId, kmFrom, kmTo, rateFrom, rateTo, amountFrom, amountTo, departureLocation, destination, dateFrom, dateTo, isCompanyCar, $from, count, sorting, fields }: {
    travelExpenseId?: string;
    rateTypeId?: string;
    rateCategoryId?: string;
    kmFrom?: string;
    kmTo?: string;
    rateFrom?: string;
    rateTo?: string;
    amountFrom?: string;
    amountTo?: string;
    departureLocation?: string;
    destination?: string;
    dateFrom?: string;
    dateTo?: string;
    isCompanyCar?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMileageAllowanceRead;
    }>(`/travelExpense/mileageAllowance${QS.query(QS.explode({
        travelExpenseId,
        rateTypeId,
        rateCategoryId,
        kmFrom,
        kmTo,
        rateFrom,
        rateTo,
        amountFrom,
        amountTo,
        departureLocation,
        destination,
        dateFrom,
        dateTo,
        isCompanyCar,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create mileage allowance.
 */
export function travelExpenseMileageAllowancePost(mileageAllowance?: MileageAllowance, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMileageAllowance;
    }>("/travelExpense/mileageAllowance", oazapfts.json({
        ...opts,
        method: "POST",
        body: mileageAllowance
    }));
}
/**
 * Get passenger by ID.
 */
export function travelExpensePassengerGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPassenger;
    }>(`/travelExpense/passenger/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update passenger.
 */
export function travelExpensePassengerPut(id: number, passenger?: Passenger, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPassenger;
    }>(`/travelExpense/passenger/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: passenger
    }));
}
/**
 * Delete passenger.
 */
export function travelExpensePassengerDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/passenger/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find passengers corresponding with sent data.
 */
export function travelExpensePassengerSearch({ mileageAllowance, name, $from, count, sorting, fields }: {
    mileageAllowance?: string;
    name?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePassengerRead;
    }>(`/travelExpense/passenger${QS.query(QS.explode({
        mileageAllowance,
        name,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create passenger.
 */
export function travelExpensePassengerPost(passenger?: Passenger, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPassenger;
    }>("/travelExpense/passenger", oazapfts.json({
        ...opts,
        method: "POST",
        body: passenger
    }));
}
/**
 * Get per diem compensation by ID.
 */
export function travelExpensePerDiemCompensationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPerDiemCompensation;
    }>(`/travelExpense/perDiemCompensation/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update per diem compensation.
 */
export function travelExpensePerDiemCompensationPut(id: number, perDiemCompensation?: PerDiemCompensation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPerDiemCompensation;
    }>(`/travelExpense/perDiemCompensation/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: perDiemCompensation
    }));
}
/**
 * Delete per diem compensation.
 */
export function travelExpensePerDiemCompensationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/perDiemCompensation/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find per diem compensations corresponding with sent data.
 */
export function travelExpensePerDiemCompensationSearch({ travelExpenseId, rateTypeId, rateCategoryId, overnightAccommodation, countFrom, countTo, rateFrom, rateTo, amountFrom, amountTo, location, address, isDeductionForBreakfast, isLunchDeduction, isDinnerDeduction, $from, count, sorting, fields }: {
    travelExpenseId?: string;
    rateTypeId?: string;
    rateCategoryId?: string;
    overnightAccommodation?: "NONE" | "HOTEL" | "BOARDING_HOUSE_WITHOUT_COOKING" | "BOARDING_HOUSE_WITH_COOKING";
    countFrom?: number;
    countTo?: number;
    rateFrom?: string;
    rateTo?: string;
    amountFrom?: string;
    amountTo?: string;
    location?: string;
    address?: string;
    isDeductionForBreakfast?: boolean;
    isLunchDeduction?: boolean;
    isDinnerDeduction?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePerDiemCompensationRead;
    }>(`/travelExpense/perDiemCompensation${QS.query(QS.explode({
        travelExpenseId,
        rateTypeId,
        rateCategoryId,
        overnightAccommodation,
        countFrom,
        countTo,
        rateFrom,
        rateTo,
        amountFrom,
        amountTo,
        location,
        address,
        isDeductionForBreakfast,
        isLunchDeduction,
        isDinnerDeduction,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create per diem compensation.
 */
export function travelExpensePerDiemCompensationPost(perDiemCompensation?: PerDiemCompensation, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPerDiemCompensation;
    }>("/travelExpense/perDiemCompensation", oazapfts.json({
        ...opts,
        method: "POST",
        body: perDiemCompensation
    }));
}
/**
 * Get travel expense by ID.
 */
export function travelExpenseGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>(`/travelExpense/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update travel expense.
 */
export function travelExpensePut(id: number, travelExpense?: TravelExpense, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>(`/travelExpense/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: travelExpense
    }));
}
/**
 * Delete travel expense.
 */
export function travelExpenseDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Copy travel expense.
 */
export function travelExpenseCopyCopy(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>(`/travelExpense/:copy${QS.query(QS.explode({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find travel expenses corresponding with sent data.
 */
export function travelExpenseSearch({ employeeId, departmentId, projectId, projectManagerId, departureDateFrom, returnDateTo, state, $from, count, sorting, fields }: {
    employeeId?: string;
    departmentId?: string;
    projectId?: string;
    projectManagerId?: string;
    departureDateFrom?: string;
    returnDateTo?: string;
    state?: "ALL" | "OPEN" | "APPROVED" | "SALARY_PAID" | "DELIVERED" | "REJECTED";
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRead;
    }>(`/travelExpense${QS.query(QS.explode({
        employeeId,
        departmentId,
        projectId,
        projectManagerId,
        departureDateFrom,
        returnDateTo,
        state,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create travel expense.
 */
export function travelExpensePost(travelExpense?: TravelExpense, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>("/travelExpense", oazapfts.json({
        ...opts,
        method: "POST",
        body: travelExpense
    }));
}
/**
 * Approve travel expenses.
 */
export function travelExpenseApproveApprove({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRead;
    }>(`/travelExpense/:approve${QS.query(QS.explode({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Unapprove travel expenses.
 */
export function travelExpenseUnapproveUnapprove({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRead;
    }>(`/travelExpense/:unapprove${QS.query(QS.explode({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Deliver travel expenses.
 */
export function travelExpenseDeliverDeliver({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRead;
    }>(`/travelExpense/:deliver${QS.query(QS.explode({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Undeliver travel expenses.
 */
export function travelExpenseUndeliverUndeliver(travelExpense?: TravelExpense, { id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRead;
    }>(`/travelExpense/:undeliver${QS.query(QS.explode({
        id
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: travelExpense
    }));
}
/**
 * Create vouchers
 */
export function travelExpenseCreateVouchersCreateVouchers(date: string, { id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRead;
    }>(`/travelExpense/:createVouchers${QS.query(QS.explode({
        id,
        date
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Get attachment by travel expense ID.
 */
export function travelExpenseAttachmentDownloadAttachment(travelExpenseId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: string;
    }>(`/travelExpense/${encodeURIComponent(travelExpenseId)}/attachment`, {
        ...opts
    });
}
/**
 * Upload attachment to travel expense.
 */
export function travelExpenseAttachmentUploadAttachment(travelExpenseId: number, body: {
    file: Blob;
}, { createNewCost }: {
    createNewCost?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/${encodeURIComponent(travelExpenseId)}/attachment${QS.query(QS.explode({
        createNewCost
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Delete attachment.
 */
export function travelExpenseAttachmentDeleteAttachment(travelExpenseId: number, { version, sendToInbox, split }: {
    version?: number;
    sendToInbox?: boolean;
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/${encodeURIComponent(travelExpenseId)}/attachment${QS.query(QS.explode({
        version,
        sendToInbox,
        split
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Upload multiple attachments to travel expense.
 */
export function travelExpenseAttachmentListUploadAttachments(travelExpenseId: number, formDataMultiPart: FormDataMultiPart, { createNewCost }: {
    createNewCost?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/${encodeURIComponent(travelExpenseId)}/attachment/list${QS.query(QS.explode({
        createNewCost
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: formDataMultiPart
    }));
}
/**
 * Get travel expense rate by ID.
 */
export function travelExpenseRateGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseRate;
    }>(`/travelExpense/rate/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find rates corresponding with sent data.
 */
export function travelExpenseRateSearch({ rateCategoryId, $type, isValidDayTrip, isValidAccommodation, isValidDomestic, isValidForeignTravel, requiresZone, requiresOvernightAccommodation, dateFrom, dateTo, $from, count, sorting, fields }: {
    rateCategoryId?: string;
    $type?: "PER_DIEM" | "ACCOMMODATION_ALLOWANCE" | "MILEAGE_ALLOWANCE";
    isValidDayTrip?: boolean;
    isValidAccommodation?: boolean;
    isValidDomestic?: boolean;
    isValidForeignTravel?: boolean;
    requiresZone?: boolean;
    requiresOvernightAccommodation?: boolean;
    dateFrom?: string;
    dateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRateRead;
    }>(`/travelExpense/rate${QS.query(QS.explode({
        rateCategoryId,
        "type": $type,
        isValidDayTrip,
        isValidAccommodation,
        isValidDomestic,
        isValidForeignTravel,
        requiresZone,
        requiresOvernightAccommodation,
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get travel expense rate category by ID.
 */
export function travelExpenseRateCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseRateCategory;
    }>(`/travelExpense/rateCategory/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find rate categories corresponding with sent data.
 */
export function travelExpenseRateCategorySearch({ $type, name, travelReportRateCategoryGroupId, ameldingWageCode, wageCodeNumber, isValidDayTrip, isValidAccommodation, isValidDomestic, requiresZone, isRequiresOvernightAccommodation, dateFrom, dateTo, $from, count, sorting, fields }: {
    $type?: "PER_DIEM" | "ACCOMMODATION_ALLOWANCE" | "MILEAGE_ALLOWANCE";
    name?: string;
    travelReportRateCategoryGroupId?: number;
    ameldingWageCode?: string;
    wageCodeNumber?: string;
    isValidDayTrip?: boolean;
    isValidAccommodation?: boolean;
    isValidDomestic?: boolean;
    requiresZone?: boolean;
    isRequiresOvernightAccommodation?: boolean;
    dateFrom?: string;
    dateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRateCategoryRead;
    }>(`/travelExpense/rateCategory${QS.query(QS.explode({
        "type": $type,
        name,
        travelReportRateCategoryGroupId,
        ameldingWageCode,
        wageCodeNumber,
        isValidDayTrip,
        isValidAccommodation,
        isValidDomestic,
        requiresZone,
        isRequiresOvernightAccommodation,
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get travel report rate category group by ID.
 */
export function travelExpenseRateCategoryGroupGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseRateCategoryGroup;
    }>(`/travelExpense/rateCategoryGroup/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find rate categoriy groups corresponding with sent data.
 */
export function travelExpenseRateCategoryGroupSearch({ name, isForeignTravel, dateFrom, dateTo, $from, count, sorting, fields }: {
    name?: string;
    isForeignTravel?: boolean;
    dateFrom?: string;
    dateTo?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRateCategoryGroupRead;
    }>(`/travelExpense/rateCategoryGroup${QS.query(QS.explode({
        name,
        isForeignTravel,
        dateFrom,
        dateTo,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get cost category by ID.
 */
export function travelExpenseCostCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelCostCategory;
    }>(`/travelExpense/costCategory/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find cost category corresponding with sent data.
 */
export function travelExpenseCostCategorySearch({ id, description, isInactive, showOnEmployeeExpenses, $from, count, sorting, fields }: {
    id?: string;
    description?: string;
    isInactive?: boolean;
    showOnEmployeeExpenses?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelCostCategoryRead;
    }>(`/travelExpense/costCategory${QS.query(QS.explode({
        id,
        description,
        isInactive,
        showOnEmployeeExpenses,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get payment type by ID.
 */
export function travelExpensePaymentTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelPaymentType;
    }>(`/travelExpense/paymentType/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payment type corresponding with sent data.
 */
export function travelExpensePaymentTypeSearch({ id, description, isInactive, showOnEmployeeExpenses, $from, count, sorting, fields }: {
    id?: string;
    description?: string;
    isInactive?: boolean;
    showOnEmployeeExpenses?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelPaymentTypeRead;
    }>(`/travelExpense/paymentType${QS.query(QS.explode({
        id,
        description,
        isInactive,
        showOnEmployeeExpenses,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get travel expense settings of logged in company.
 */
export function travelExpenseSettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseSettings;
    }>(`/travelExpense/settings${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Get travel expense zone by ID.
 */
export function travelExpenseZoneGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseZone;
    }>(`/travelExpense/zone/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find travel expense zones corresponding with sent data.
 */
export function travelExpenseZoneSearch({ id, code, isDisabled, $from, count, sorting, fields }: {
    id?: string;
    code?: string;
    isDisabled?: boolean;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseZoneRead;
    }>(`/travelExpense/zone${QS.query(QS.explode({
        id,
        code,
        isDisabled,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] - Get all structured comments related to a given vatCode
 */
export function vatReturnsCommentQuery({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVatReturnsVatCodeCommentRead;
    }>(`/vatReturns/comment${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] - Get all structured comments available
 */
export function vatReturnsCommentAllAll({ $from, count, sorting, fields }: {
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVatReturnsCommentRead;
    }>(`/vatReturns/comment/>all${QS.query(QS.explode({
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find voucherMessage (or a comment) put on a voucher by inputting voucher ids
 */
export function voucherMessageSearch({ voucherIds, $from, count, sorting, fields }: {
    voucherIds?: string;
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherMessageRead;
    }>(`/voucherMessage${QS.query(QS.explode({
        voucherIds,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Post new voucherMessage.
 */
export function voucherMessagePost(voucherMessage?: VoucherMessage, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherMessage;
    }>("/voucherMessage", oazapfts.json({
        ...opts,
        method: "POST",
        body: voucherMessage
    }));
}
/**
 * Get voucherStatus by ID.
 */
export function voucherStatusGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherStatus;
    }>(`/voucherStatus/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find voucherStatus corresponding with sent data. The voucherStatus is used to coordinate integration processes. Requires setup done by Tripletex, currently supports debt collection.
 */
export function voucherStatusSearch({ ids, voucherIds, status, $type, $from, count, sorting, fields }: {
    ids?: string;
    voucherIds?: string;
    status?: "WAITING" | "DONE" | "SKIPPED" | "ERROR" | "NONE" | "PROCESSING" | "RECLAIMED";
    $type?: "TRIPLETEX" | "SUPPLIERINVOICE_EXTERNAL" | "DEBT_COLLECTION";
    $from?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherStatusRead;
    }>(`/voucherStatus${QS.query(QS.explode({
        ids,
        voucherIds,
        status,
        "type": $type,
        "from": $from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Post new voucherStatus.
 */
export function voucherStatusPost(voucherStatus?: VoucherStatus, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherStatus;
    }>("/voucherStatus", oazapfts.json({
        ...opts,
        method: "POST",
        body: voucherStatus
    }));
}
/**
 * Get favorite menu
 */
export function internalFavoritesGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperFavoriteMenu;
    }>(`/internal/favorites${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add new favorite
 */
export function internalFavoritesPost(body?: {
    pageUrl?: string;
    name?: string;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInteger;
    }>("/internal/favorites", oazapfts.form({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Update a favorite
 */
export function internalFavoritesPut(id: number, body: {
    name: string;
    rank?: number;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/internal/favorites/${encodeURIComponent(id)}`, oazapfts.form({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete a favorite
 */
export function internalFavoritesDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/internal/favorites/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get segmentation data
 */
export function internalSegmentationGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSegmentationData;
    }>(`/internal/segmentation${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *
 */
export function yearEndNoteGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperYearEndReportNote;
    }>(`/yearEnd/note/${encodeURIComponent(id)}${QS.query(QS.explode({
        fields
    }))}`, {
        ...opts
    });
}
