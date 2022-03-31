/**
 * Tripletex API
 * 2.69.13
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
export type Change = {
    employeeId?: number;
    timestamp?: string;
    changeType?: "CREATE" | "UPDATE" | "DELETE" | "LOCKED" | "REOPENED" | "DO_NOT_SHOW";
};
export type Activity = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    "number"?: string;
    description?: string;
    activityType?: "GENERAL_ACTIVITY" | "PROJECT_GENERAL_ACTIVITY" | "PROJECT_SPECIFIC_ACTIVITY" | "TASK";
    isProjectActivity?: boolean;
    isGeneral?: boolean;
    isTask?: boolean;
    isDisabled?: boolean;
    isChargeable?: boolean;
    rate?: number;
    costPercentage?: number;
    displayName?: string;
};
export type ListResponseActivity = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Activity[];
};
export type ResponseWrapperActivity = {
    value?: Activity;
};
export type Country = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    isoAlpha2Code?: string;
    isoAlpha3Code?: string;
    isoNumericCode?: string;
};
export type DeliveryAddress = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    country?: Country;
    name?: string;
};
export type ResponseWrapperDeliveryAddress = {
    value?: DeliveryAddress;
};
export type ListResponseDeliveryAddress = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DeliveryAddress[];
};
export type VatType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    "number"?: string;
    percentage?: number;
    deductionPercentage?: number;
    parentType?: VatType;
};
export type Currency = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    code?: string;
    description?: string;
    factor?: number;
    displayName?: string;
    isDisabled?: boolean;
};
export type Account = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    "number": number;
    name: string;
    description?: string;
    "type"?: "ASSETS" | "EQUITY" | "LIABILITIES" | "OPERATING_REVENUES" | "OPERATING_EXPENSES" | "INVESTMENT_INCOME" | "COST_OF_CAPITAL" | "TAX_ON_ORDINARY_ACTIVITIES" | "EXTRAORDINARY_INCOME" | "EXTRAORDINARY_COST" | "TAX_ON_EXTRAORDINARY_ACTIVITIES" | "ANNUAL_RESULT" | "TRANSFERS_AND_ALLOCATIONS";
    legalVatTypes?: VatType[];
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
};
export type Asset = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    description: string;
    dateOfAcquisition: string;
    acquisitionCost?: number;
    account?: Account;
};
export type ListResponseAsset = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Asset[];
};
export type ResponseWrapperAsset = {
    value?: Asset;
};
export type BalanceSheetAccount = {
    account?: Account;
    balanceIn?: number;
    balanceChange?: number;
    balanceOut?: number;
    startDate?: string;
    endDate?: string;
};
export type ListResponseBalanceSheetAccount = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BalanceSheetAccount[];
};
export type Bank = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    bankStatementFileFormatSupport?: ("DNB_CSV" | "EIKA_TELEPAY" | "SPAREBANK1_TELEPAY" | "VISMA_ACCOUNT_STATEMENT" | "HANDELSBANKEN_TELEPAY" | "SPAREBANKEN_VEST_TELEPAY" | "NORDEA_CSV" | "TRANSFERWISE" | "SPAREBANKEN_SOR_TELEPAY" | "SPAREBANKEN_OST_TELEPAY" | "DANSKE_BANK_CSV" | "CULTURA_BANK_TELEPAY" | "SBANKEN_PRIVAT_CSV" | "HAUGESUND_SPAREBANK_CSV" | "VISMA_ACCOUNT_STATEMENT_PSD2" | "SBANKEN_BEDRIFT_CSV" | "LANDKREDITT_TELEPAY" | "ZTL")[];
    registerNumbers?: number[];
};
export type ResponseWrapperBank = {
    value?: Bank;
};
export type ListResponseBank = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Bank[];
};
export type AccountingPeriod = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    "number"?: number;
    start?: string;
    end?: string;
    isClosed?: boolean;
};
export type VoucherType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
};
export type InternationalId = {
    intAmeldingType?: "PASSPORT_NO" | "NATIONAL_INSURANCE_NO" | "TAX_IDENTIFICATION_NO" | "VALUE_ADDED_TAX_IDENTIFICATION_NO";
    country?: Country;
    "number"?: string;
};
export type Address = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    country?: Country;
};
export type Department = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    departmentNumber?: string;
    departmentManager?: Employee;
    displayName?: string;
    isInactive?: boolean;
};
export type Municipality = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    "number"?: string;
    name?: string;
    county?: string;
    payrollTaxZone?: string;
};
export type Division = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    municipalityDate?: string;
    municipality?: Municipality;
};
export type MaritimeEmployment = {
    shipRegister?: "NIS" | "NOR" | "FOREIGN";
    shipType?: "OTHER" | "DRILLING_PLATFORM" | "TOURIST";
    tradeArea?: "DOMESTIC" | "FOREIGN";
};
export type OccupationCode = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    nameNO?: string;
    code?: string;
};
export type EmploymentDetails = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
};
export type Employment = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
};
export type HolidayAllowanceEarned = {
    year?: number;
    amount?: number;
    basis?: number;
    amountExtraHolidayWeek?: number;
};
export type EmployeeCategory = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    "number"?: string;
    description?: string;
};
export type Employee = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    firstName: string;
    lastName: string;
    displayName?: string;
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
    allowInformationRegistration?: boolean;
    isContact?: boolean;
    comments?: string;
    address?: Address;
    department?: Department;
    employments?: Employment[];
    holidayAllowanceEarned?: HolidayAllowanceEarned;
    employeeCategory?: EmployeeCategory;
    isAuthProjectOverviewURL?: boolean;
    pictureId?: number;
};
export type CustomerCategory = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    "number"?: string;
    description?: string;
    "type"?: number;
    displayName?: string;
};
export type CompanyBankAccountPresentation = {
    iban?: string;
    bban?: string;
    bic?: string;
    country?: Country;
    provider?: "NETS" | "AUTOPAY";
};
export type Customer = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    organizationNumber?: string;
    supplierNumber?: number;
    customerNumber?: number;
    isSupplier?: boolean;
    isCustomer?: boolean;
    isInactive?: boolean;
    accountManager?: Employee;
    email?: string;
    invoiceEmail?: string;
    overdueNoticeEmail?: string;
    bankAccounts?: string[];
    phoneNumber?: string;
    phoneNumberMobile?: string;
    description?: string;
    language?: "NO" | "EN" | "SV";
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
};
export type Supplier = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    organizationNumber?: string;
    supplierNumber?: number;
    customerNumber?: number;
    isSupplier?: boolean;
    isCustomer?: boolean;
    isInactive?: boolean;
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
    isWholesaler?: boolean;
    displayName?: string;
};
export type ProjectCategory = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    "number"?: string;
    description?: string;
    displayName?: string;
};
export type DiscountGroup = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    "number"?: string;
    nameAndNumber?: string;
};
export type ProductUnit = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    displayName?: string;
    name: string;
    nameShort?: string;
    commonCode: string;
    isDeletable?: boolean;
};
export type Document = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    fileName: string;
    size?: number;
    mimeType?: string;
};
export type Product = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    "number"?: string;
    description?: string;
    ean?: string;
    elNumber?: string;
    nrfNumber?: string;
    costExcludingVatCurrency?: number;
    expenses?: number;
    expensesInPercent?: number;
    costPrice?: number;
    profit?: number;
    profitInPercent?: number;
    priceExcludingVatCurrency?: number;
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    discountGroup?: DiscountGroup;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    stockOfGoods?: number;
    vatType?: VatType;
    currency?: Currency;
    department?: Department;
    account?: Account;
    discountPrice?: number;
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
    markupListPercentage?: number;
    markupNetPercentage?: number;
    displayName?: string;
};
export type Inventory = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    "number"?: string;
    displayName?: string;
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
};
export type InventoryLocation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    inventory: Inventory;
    "number"?: number;
    name: string;
    isInactive?: boolean;
    isDeletable?: boolean;
};
export type Contact = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    phoneNumberWork?: string;
    customer?: Customer;
    department?: Department;
};
export type OrderGroup = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    order: Order;
    title?: string;
    comment?: string;
    sortIndex?: number;
};
export type OrderLine = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    amountExcludingVatCurrency?: number;
    amountIncludingVatCurrency?: number;
    order?: Order;
    unitPriceIncludingVatCurrency?: number;
    isSubscription?: boolean;
    subscriptionPeriodStart?: string;
    subscriptionPeriodEnd?: string;
    orderGroup?: OrderGroup;
};
export type Order = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    subscriptionPeriodsOnInvoiceType?: "MONTHS";
    subscriptionInvoicingTimeInAdvanceOrArrears?: "ADVANCE" | "ARREARS";
    subscriptionInvoicingTime?: number;
    subscriptionInvoicingTimeType?: "DAYS" | "MONTHS";
    isSubscriptionAutoInvoicing?: boolean;
    preliminaryInvoice?: Invoice;
    attachment?: Document[];
    sendMethodDescription?: string;
    canCreateBackorder?: boolean;
    invoiceOnAccountVatHigh?: boolean;
    totalInvoicedOnAccountAmountAbsoluteCurrency?: number;
};
export type SalaryTransaction = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    date?: string;
    year: number;
    month: number;
    isHistorical?: boolean;
    paySlipsAvailableDate?: string;
    payslips: Payslip[];
};
export type SalaryType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    "number"?: string;
    name?: string;
    description?: string;
    showInTimesheet?: boolean;
};
export type SalarySpecification = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
};
export type Payslip = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    transaction?: SalaryTransaction;
    employee: Employee;
    date?: string;
    year?: number;
    month?: number;
    specifications?: SalarySpecification[];
    vacationAllowanceAmount?: number;
    grossAmount?: number;
    amount?: number;
    "number"?: number;
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
export type TravelExpenseRateCategory = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
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
};
export type TravelExpenseRate = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    rateCategory: TravelExpenseRateCategory;
    zone: string;
    rate?: number;
    breakfastDeductionRate?: number;
    lunchDeductionRate?: number;
    dinnerDeductionRate?: number;
};
export type PerDiemCompensation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
};
export type Passenger = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    mileageAllowance?: MileageAllowance;
};
export type TravelCostCategory = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    description: string;
    account?: Account;
    vatType?: VatType;
    isVatLocked?: boolean;
    showOnTravelExpenses?: boolean;
    showOnEmployeeExpenses?: boolean;
    isInactive?: boolean;
    sequence: number;
};
export type TravelPaymentType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    description: string;
    account?: Account;
    showOnTravelExpenses?: boolean;
    showOnEmployeeExpenses?: boolean;
    isInactive?: boolean;
};
export type Prediction = {
    predictedValue?: string;
    confidence?: string;
};
export type Cost = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    amountNOKInclVATLow?: number;
    amountNOKInclVATMedium?: number;
    amountNOKInclVATHigh?: number;
    isPaidByEmployee?: boolean;
    isChargeable?: boolean;
    date?: string;
    predictions?: {
        [key: string]: Prediction;
    };
};
export type MileageAllowance = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    passengers?: Passenger[];
    passengerSupplement?: MileageAllowance;
    tollCost?: Cost;
};
export type AccommodationAllowance = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    zone?: string;
    location: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
};
export type Link = {
    rel?: string;
    "type"?: "POST" | "PUT" | "GET" | "DELETE";
    href?: string;
};
export type TravelExpense = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    project?: Project;
    employee: Employee;
    approvedBy?: Employee;
    completedBy?: Employee;
    department?: Department;
    payslip?: Payslip;
    vatType?: VatType;
    paymentCurrency?: Currency;
    travelDetails?: TravelDetails;
    voucher?: Voucher;
    attachment?: Document;
    isCompleted?: boolean;
    isApproved?: boolean;
    isChargeable?: boolean;
    isFixedInvoicedAmount?: boolean;
    isIncludeAttachedReceiptsWhenReinvoicing?: boolean;
    completedDate?: string;
    approvedDate?: string;
    date?: string;
    travelAdvance?: number;
    fixedInvoicedAmount?: number;
    amount?: number;
    paymentAmount?: number;
    chargeableAmount?: number;
    lowRateVAT?: number;
    mediumRateVAT?: number;
    highRateVAT?: number;
    paymentAmountCurrency?: number;
    "number"?: number;
    invoice?: Invoice;
    title?: string;
    perDiemCompensations?: PerDiemCompensation[];
    mileageAllowances?: MileageAllowance[];
    accommodationAllowances?: AccommodationAllowance[];
    costs?: Cost[];
    attachmentCount?: number;
    state?: "ALL" | "OPEN" | "APPROVED" | "SALARY_PAID" | "DELIVERED";
    actions?: Link[];
    isSalaryAdmin?: boolean;
    showPayslip?: boolean;
    accountingPeriodClosed?: boolean;
    accountingPeriodVATClosed?: boolean;
};
export type ProjectInvoiceDetails = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    project?: Project;
    feeAmount?: number;
    feeAmountCurrency?: number;
    markupPercent?: number;
    markupAmount?: number;
    markupAmountCurrency?: number;
    amountOrderLinesAndReinvoicing?: number;
    amountOrderLinesAndReinvoicingCurrency?: number;
    amountTravelReportsAndExpenses?: number;
    amountTravelReportsAndExpensesCurrency?: number;
    feeInvoiceText?: string;
    invoiceText?: string;
    includeOrderLinesAndReinvoicing?: boolean;
    includeHours?: boolean;
    includeOnAccountBalance?: boolean;
    onAccountBalanceAmount?: number;
    onAccountBalanceAmountCurrency?: number;
    vatType?: VatType;
    invoice?: Invoice;
};
export type Reminder = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    reminderDate?: string;
    charge?: number;
    chargeCurrency?: number;
    totalCharge?: number;
    totalChargeCurrency?: number;
    totalAmountCurrency?: number;
    interests?: number;
    interestRate?: number;
    termOfPayment: string;
    currency?: Currency;
    "type": "SOFT_REMINDER" | "REMINDER" | "NOTICE_OF_DEBT_COLLECTION" | "DEBT_COLLECTION";
    comment?: string;
    kid?: string;
    bankAccountNumber?: string;
    bankAccountIBAN?: string;
    bankAccountSWIFT?: string;
    bank?: string;
};
export type Invoice = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    invoiceNumber?: number;
    invoiceDate: string;
    customer?: Customer;
    creditedInvoice?: number;
    isCredited?: boolean;
    invoiceDueDate: string;
    kid?: string;
    invoiceComment?: string;
    comment?: string;
    orders: Order[];
    orderLines?: OrderLine[];
    travelReports?: TravelExpense[];
    projectInvoiceDetails?: ProjectInvoiceDetails[];
    voucher?: Voucher;
    deliveryDate?: string;
    amount?: number;
    amountCurrency?: number;
    amountExcludingVat?: number;
    amountExcludingVatCurrency?: number;
    amountRoundoff?: number;
    amountRoundoffCurrency?: number;
    amountOutstanding?: number;
    amountCurrencyOutstanding?: number;
    amountOutstandingTotal?: number;
    amountCurrencyOutstandingTotal?: number;
    sumRemits?: number;
    currency?: Currency;
    isCreditNote?: boolean;
    isCharged?: boolean;
    isApproved?: boolean;
    postings?: Posting[];
    reminders?: Reminder[];
    invoiceRemarks?: string;
    paymentTypeId?: number;
    paidAmount?: number;
    isPeriodizationPossible?: boolean;
    ehfSendStatus?: "DO_NOT_SEND" | "SEND" | "SENT" | "SEND_FAILURE_RECIPIENT_NOT_FOUND";
};
export type ProjectOrderLine = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    amountExcludingVatCurrency?: number;
    amountIncludingVatCurrency?: number;
    project: Project;
    date: string;
    isChargeable?: boolean;
    isBudget?: boolean;
    invoice?: Invoice;
};
export type ProjectSpecificRate = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    hourlyRate: number;
    hourlyCostPercentage?: number;
    projectHourlyRate: ProjectHourlyRate;
    employee?: Employee;
    activity?: Activity;
};
export type ProjectHourlyRate = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    project?: Project;
    startDate: string;
    showInProjectOrder?: boolean;
    hourlyRateModel: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    projectSpecificRates?: ProjectSpecificRate[];
    fixedRate?: number;
};
export type ProjectParticipant = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    project?: Project;
    employee?: Employee;
    adminAccess?: boolean;
};
export type ProjectActivity = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    activity?: Activity;
    project?: Project;
    startDate?: string;
    endDate?: string;
    isClosed?: boolean;
    budgetHours?: number;
    budgetHourlyRateCurrency?: number;
    budgetFeeCurrency?: number;
};
export type Project = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    "number"?: string;
    displayName?: string;
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
    isOffer?: boolean;
    isFixedPrice?: boolean;
    projectCategory?: ProjectCategory;
    deliveryAddress?: DeliveryAddress;
    displayNameFormat?: "NAME_STANDARD" | "NAME_INCL_CUSTOMER_NAME" | "NAME_INCL_PARENT_NAME" | "NAME_INCL_PARENT_NUMBER" | "NAME_INCL_PARENT_NAME_AND_NUMBER";
    reference?: string;
    externalAccountsNumber?: string;
    discountPercentage?: number;
    vatType?: VatType;
    fixedprice?: number;
    contributionMarginPercent?: number;
    numberOfSubProjects?: number;
    numberOfProjectParticipants?: number;
    orderLines?: ProjectOrderLine[];
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
    invoicingPlan?: Invoice[];
    preliminaryInvoice?: Invoice;
    generalProjectActivitiesPerProjectOnly?: boolean;
    projectActivities?: ProjectActivity[];
    hierarchyNameAndNumber?: string;
    invoiceDueDate?: number;
    invoiceReceiverEmail?: string;
    accessType?: "NONE" | "READ" | "WRITE";
    useProductNetPrice?: boolean;
    ignoreCompanyProductDiscountAgreement?: boolean;
};
export type CloseGroup = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    date?: string;
    postings?: Posting[];
};
export type Posting = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    "type"?: "INCOMING_PAYMENT" | "INCOMING_PAYMENT_OPPOSITE" | "INVOICE_EXPENSE" | "OUTGOING_INVOICE_CUSTOMER_POSTING";
    externalRef?: string;
    systemGenerated?: boolean;
};
export type Voucher = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    date: string;
    "number"?: number;
    tempNumber?: number;
    year?: number;
    description: string;
    voucherType?: VoucherType;
    reverseVoucher?: Voucher;
    postings: Posting[];
    document?: Document;
    attachment?: Document;
    externalVoucherNumber?: string;
    ediDocument?: Document;
};
export type BankStatement = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    openingBalanceCurrency?: number;
    closingBalanceCurrency?: number;
    fileName?: string;
    bank?: Bank;
    fromDate?: string;
    toDate?: string;
    transactions?: BankTransaction[];
};
export type BankTransaction = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    postedDate?: string;
    description?: string;
    amountCurrency?: number;
    bankStatement?: BankStatement;
};
export type BankReconciliation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    account: Account;
    accountingPeriod: AccountingPeriod;
    voucher?: Voucher;
    transactions?: BankTransaction[];
    isClosed?: boolean;
    "type": "MANUAL" | "AUTOMATIC";
    bankAccountClosingBalanceCurrency?: number;
    closedDate?: string;
    closedByContact?: Contact;
    closedByEmployee?: Employee;
    approvable?: boolean;
    autoPayReconciliation?: boolean;
};
export type ListResponseBankReconciliation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliation[];
};
export type ResponseWrapperBankReconciliation = {
    value?: BankReconciliation;
};
export type BankReconciliationPaymentType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    description?: string;
    debitAccount?: Account;
    creditAccount?: Account;
    isInactive?: boolean;
};
export type BankReconciliationMatch = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    bankReconciliation: BankReconciliation;
    "type"?: "MANUAL" | "PENDING_SUGGESTION" | "REJECTED_SUGGESTION" | "APPROVED_SUGGESTION" | "ADJUSTMENT" | "AUTO_MATCHED" | "REJECTED_AUTO_MATCH";
    transactions?: BankTransaction[];
    postings?: Posting[];
};
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
export type ListResponseBankReconciliationAdjustment = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationAdjustment[];
};
export type ListResponseBankReconciliationMatch = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationMatch[];
};
export type ResponseWrapperBankReconciliationMatch = {
    value?: BankReconciliationMatch;
};
export type BankReconciliationMatchesCounter = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    bankReconciliationId?: number;
    autoMatchedMatches?: number;
    suggestedMatches?: number;
};
export type ResponseWrapperBankReconciliationMatchesCounter = {
    value?: BankReconciliationMatchesCounter;
};
export type ResponseWrapperBankReconciliationPaymentType = {
    value?: BankReconciliationPaymentType;
};
export type ListResponseBankReconciliationPaymentType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankReconciliationPaymentType[];
};
export type ResponseWrapperBankStatement = {
    value?: BankStatement;
};
export type ListResponseBankStatement = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankStatement[];
};
export type ResponseWrapperObject = {
    value?: object;
};
export type ResponseWrapperBankTransaction = {
    value?: BankTransaction;
};
export type ListResponseBankTransaction = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: BankTransaction[];
};
export type ApiConsumer = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    consumerName: string;
    emails: string;
};
export type ConsumerToken = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    apiConsumer?: ApiConsumer;
    token?: string;
    expirationDate?: string;
};
export type ResponseWrapperConsumerToken = {
    value?: ConsumerToken;
};
export type EmployeeToken = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee?: Employee;
    apiConsumer?: ApiConsumer;
    token: string;
    expirationDate?: string;
};
export type ResponseWrapperEmployeeToken = {
    value?: EmployeeToken;
};
export type Company = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    email?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    faxNumber?: string;
    address: Address;
    "type": "NONE" | "ENK" | "AS" | "NUF" | "ANS" | "DA" | "PRE" | "KS" | "ASA" | "BBL" | "BRL" | "GFS" | "SPA" | "SF" | "IKS" | "KF_FKF" | "FCD" | "EOFG" | "BA" | "STI" | "ORG" | "ESEK" | "SA" | "SAM" | "BO" | "VPFO" | "OS" | "Other";
    currency?: Currency;
};
export type LoggedInUserInfoDto = {
    employeeId?: number;
    employee?: Employee;
    companyId?: number;
    company?: Company;
    language?: string;
};
export type ResponseWrapperLoggedInUserInfoDto = {
    value?: LoggedInUserInfoDto;
};
export type SessionToken = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    consumerToken?: ConsumerToken;
    employeeToken?: EmployeeToken;
    expirationDate: string;
    token: string;
    encryptionKey?: string;
};
export type ResponseWrapperSessionToken = {
    value?: SessionToken;
};
export type ListResponseCompany = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Company[];
};
export type ResponseWrapperCompany = {
    value?: Company;
};
export type AltinnCompanyModule = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    altInnId: number;
    altInnPassword: string;
};
export type ResponseWrapperAltinnCompanyModule = {
    value?: AltinnCompanyModule;
};
export type SalesModuleDto = {
    name: "MAMUT" | "MAMUT_WITH_WAGE" | "AGRO_LICENCE" | "AGRO_CLIENT" | "AGRO_DOCUMENT_CENTER" | "AGRO_INVOICE" | "AGRO_INVOICE_MIGRATED" | "AGRO_WAGE" | "NO1TS" | "NO1TS_TRAVELREPORT" | "NO1TS_ACCOUNTING" | "BASIS" | "SMART" | "PLUSS" | "KOMPLETT" | "VVS" | "ELECTRO" | "ACCOUNTING_OFFICE" | "SMART_WAGE" | "SMART_TIME_TRACKING" | "SMART_PROJECT" | "OCR" | "API_V2" | "ELECTRONIC_VOUCHERS" | "UP_TO_500_VOUCHERS" | "UP_TO_1000_VOUCHERS" | "UP_TO_2000_VOUCHERS" | "UP_TO_3500_VOUCHERS" | "UP_TO_5000_VOUCHERS" | "UP_TO_10000_VOUCHERS" | "UNLIMITED_VOUCHERS" | "LOGISTICS" | "MIKRO" | "AUTOPLUS_MINI" | "AUTOPLUS_MEDIUM" | "AUTOPLUS_STOR" | "INTEGRATION_PARTNER" | "PROJECT" | "YEAR_END_REPORTING_ENK";
    costStartDate?: string;
};
export type ListResponseSalesModuleDto = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SalesModuleDto[];
};
export type ResponseWrapperSalesModuleDto = {
    value?: SalesModuleDto;
};
export type ListResponseContact = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Contact[];
};
export type ResponseWrapperContact = {
    value?: Contact;
};
export type ResponseWrapperCountry = {
    value?: Country;
};
export type ListResponseCountry = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Country[];
};
export type ResponseWrapperCurrency = {
    value?: Currency;
};
export type ListResponseCurrency = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Currency[];
};
export type CurrencyExchangeRate = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    targetCurrency: Currency;
    sourceCurrency: Currency;
    rate?: number;
    source?: "NORGES_BANK" | "HALLONEN";
    date?: string;
};
export type ResponseWrapperCurrencyExchangeRate = {
    value?: CurrencyExchangeRate;
};
export type ListResponseCustomer = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Customer[];
};
export type ResponseWrapperCustomer = {
    value?: Customer;
};
export type ListResponseCustomerCategory = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CustomerCategory[];
};
export type ResponseWrapperCustomerCategory = {
    value?: CustomerCategory;
};
export type ListResponseDepartment = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Department[];
};
export type ResponseWrapperDepartment = {
    value?: Department;
};
export type ListResponseDivision = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Division[];
};
export type ResponseWrapperDivision = {
    value?: Division;
};
export type ResponseWrapperDocument = {
    value?: Document;
};
export type DocumentArchive = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    fileName: string;
    size?: number;
    archiveDate?: string;
    mimeType: string;
};
export type ResponseWrapperDocumentArchive = {
    value?: DocumentArchive;
};
export type ListResponseDocumentArchive = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DocumentArchive[];
};
export type ListResponseEmployee = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Employee[];
};
export type ResponseWrapperEmployee = {
    value?: Employee;
};
export type ListResponseEmployeeCategory = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmployeeCategory[];
};
export type ResponseWrapperEmployeeCategory = {
    value?: EmployeeCategory;
};
export type ListResponseEmployment = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Employment[];
};
export type ResponseWrapperEmployment = {
    value?: Employment;
};
export type ListResponseEmploymentDetails = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmploymentDetails[];
};
export type ResponseWrapperEmploymentDetails = {
    value?: EmploymentDetails;
};
export type EmploymentType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employmentType: "ORDINARY" | "MARITIME" | "FREELANCE";
    nameNO?: string;
    code?: string;
};
export type ListResponseEmploymentType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: EmploymentType[];
};
export type LeaveOfAbsence = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employment?: Employment;
    leaveOfAbsenceId?: string;
    startDate: string;
    endDate?: string;
    percentage: number;
    isWageDeduction?: boolean;
    "type"?: "LEAVE_OF_ABSENCE" | "FURLOUGH" | "PARENTAL_BENEFITS" | "MILITARY_SERVICE" | "EDUCATIONAL" | "COMPASSIONATE";
};
export type ListResponseLeaveOfAbsence = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LeaveOfAbsence[];
};
export type ResponseWrapperLeaveOfAbsence = {
    value?: LeaveOfAbsence;
};
export type LeaveOfAbsenceType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    leaveOfAbsenceType: "LEAVE_OF_ABSENCE" | "FURLOUGH" | "PARENTAL_BENEFITS" | "MILITARY_SERVICE" | "EDUCATIONAL" | "COMPASSIONATE";
    nameNO?: string;
    code?: string;
};
export type ListResponseLeaveOfAbsenceType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LeaveOfAbsenceType[];
};
export type ListResponseOccupationCode = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OccupationCode[];
};
export type RemunerationType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    remunerationType: "MONTHLY_WAGE" | "HOURLY_WAGE" | "COMMISION_PERCENTAGE" | "FEE" | "PIECEWORK_WAGE";
    nameNO?: string;
    code?: string;
};
export type ListResponseRemunerationType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: RemunerationType[];
};
export type WorkingHoursScheme = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    workingHoursScheme: "NOT_SHIFT" | "ROUND_THE_CLOCK" | "SHIFT_365" | "OFFSHORE_336" | "CONTINUOUS" | "OTHER_SHIFT";
    nameNO?: string;
    code?: string;
};
export type ListResponseWorkingHoursScheme = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: WorkingHoursScheme[];
};
export type HourlyCostAndRate = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee?: Employee;
    date?: string;
    rate?: number;
    budgetRate?: number;
    hourCostRate?: number;
};
export type ListResponseHourlyCostAndRate = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: HourlyCostAndRate[];
};
export type ResponseWrapperHourlyCostAndRate = {
    value?: HourlyCostAndRate;
};
export type NextOfKin = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee?: Employee;
    name: string;
    phoneNumber: string;
    address?: string;
    typeOfRelationship?: "SPOUSE" | "PARTNER" | "PARENT" | "CHILD" | "SIBLING";
};
export type ListResponseNextOfKin = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: NextOfKin[];
};
export type ResponseWrapperNextOfKin = {
    value?: NextOfKin;
};
export type EmployeePreferences = {
    id: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employeeId?: number;
    companyId?: number;
    filterOnProjectParticipant?: boolean;
};
export type ResponseWrapperEmployeePreferences = {
    value?: EmployeePreferences;
};
export type StandardTime = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee?: Employee;
    fromDate: string;
    hoursPerDay: number;
};
export type ListResponseStandardTime = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: StandardTime[];
};
export type ResponseWrapperStandardTime = {
    value?: StandardTime;
};
export type Entitlement = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee: Employee;
    name?: string;
    entitlementId: number;
    customer: Company;
};
export type ListResponseEntitlement = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Entitlement[];
};
export type ResponseWrapperEntitlement = {
    value?: Entitlement;
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
export type EventInfoDescription = {
    description?: string;
    payloadModel?: string;
};
export type ResponseWrapperMapStringEventInfoDescription = {
    value?: {
        [key: string]: EventInfoDescription;
    };
};
export type Subscription = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    event: string;
    targetUrl: string;
    fields?: string;
    status?: "ACTIVE" | "DISABLED" | "DISABLED_TOO_MANY_ERRORS" | "DISABLED_RATE_LIMIT_EXCEEDED" | "DISABLED_MISUSE";
    authHeaderName?: string;
    authHeaderValue?: string;
};
export type ListResponseSubscription = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Subscription[];
};
export type ResponseWrapperSubscription = {
    value?: Subscription;
};
export type ListResponseInventory = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Inventory[];
};
export type ResponseWrapperInventory = {
    value?: Inventory;
};
export type Stock = {
    inventory?: string;
    inventoryId?: number;
    openingStock?: number;
    changesInPeriod?: number;
    closingStock?: number;
};
export type Inventories = {
    product?: Product;
    stock?: Stock[];
};
export type ListResponseInventories = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Inventories[];
};
export type ListResponseInventoryLocation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: InventoryLocation[];
};
export type ResponseWrapperInventoryLocation = {
    value?: InventoryLocation;
};
export type Stocktaking = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    "number"?: number;
    date: string;
    comment?: string;
    typeOfStocktaking?: "ALL_PRODUCTS_WITH_INVENTORIES" | "INCLUDE_PRODUCTS" | "NO_PRODUCTS";
    inventory: Inventory;
    isCompleted?: boolean;
};
export type ListResponseStocktaking = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Stocktaking[];
};
export type ResponseWrapperStocktaking = {
    value?: Stocktaking;
};
export type ProductLine = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    stocktaking: Stocktaking;
    product: Product;
    count?: number;
    unitCostCurrency?: number;
    costCurrency?: number;
    comment?: string;
};
export type ListResponseProductLine = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductLine[];
};
export type ResponseWrapperProductLine = {
    value?: ProductLine;
};
export type ListResponseInvoice = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Invoice[];
};
export type ResponseWrapperInvoice = {
    value?: Invoice;
};
export type PaymentType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    description: string;
    debitAccount?: Account;
    creditAccount?: Account;
    vatType?: VatType;
    customer?: Customer;
    supplier?: Supplier;
};
export type ResponseWrapperPaymentType = {
    value?: PaymentType;
};
export type ListResponsePaymentType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PaymentType[];
};
export type ResponseWrapperProjectInvoiceDetails = {
    value?: ProjectInvoiceDetails;
};
export type ListResponseProjectInvoiceDetails = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectInvoiceDetails[];
};
export type LedgerAccount = {
    account?: Account;
    sumAmount?: number;
    currency?: Currency;
    sumAmountCurrency?: number;
    openingBalance?: number;
    openingBalanceCurrency?: number;
    closingBalance?: number;
    closingBalanceCurrency?: number;
    postings?: Posting[];
};
export type ListResponseLedgerAccount = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: LedgerAccount[];
};
export type ListResponseAccount = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Account[];
};
export type ResponseWrapperAccount = {
    value?: Account;
};
export type ResponseWrapperAccountingPeriod = {
    value?: AccountingPeriod;
};
export type ListResponseAccountingPeriod = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AccountingPeriod[];
};
export type AnnualAccount = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    year?: number;
    start?: string;
    end?: string;
};
export type ResponseWrapperAnnualAccount = {
    value?: AnnualAccount;
};
export type ListResponseAnnualAccount = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AnnualAccount[];
};
export type ResponseWrapperCloseGroup = {
    value?: CloseGroup;
};
export type ListResponseCloseGroup = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CloseGroup[];
};
export type PaymentTypeOut = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
};
export type ListResponsePaymentTypeOut = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PaymentTypeOut[];
};
export type ResponseWrapperPaymentTypeOut = {
    value?: PaymentTypeOut;
};
export type ListResponsePosting = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Posting[];
};
export type ResponseWrapperPosting = {
    value?: Posting;
};
export type ResponseWrapperVatType = {
    value?: VatType;
};
export type ListResponseVatType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatType[];
};
export type ListResponseVoucher = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Voucher[];
};
export type VoucherSearchResponse = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Voucher[];
    totalNumberOfPostings?: number;
};
export type ResponseWrapperVoucher = {
    value?: Voucher;
};
export type Delete = {
    available?: boolean;
    reasons?: string[];
};
export type VoucherOptions = {
    "delete"?: Delete;
};
export type ResponseWrapperVoucherOptions = {
    value?: VoucherOptions;
};
export type HistoricalPosting = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
};
export type HistoricalVoucher = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    date: string;
    externalVoucherNumber: string;
    "number"?: number;
    year?: number;
    description: string;
    voucherType?: VoucherType;
    postings: HistoricalPosting[];
};
export type ListResponseHistoricalVoucher = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: HistoricalVoucher[];
};
export type ResponseWrapperVoucherType = {
    value?: VoucherType;
};
export type ListResponseVoucherType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherType[];
};
export type ListResponseMunicipality = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Municipality[];
};
export type ListResponseOrder = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Order[];
};
export type ResponseWrapperOrder = {
    value?: Order;
};
export type ListResponseOrderGroup = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OrderGroup[];
};
export type ResponseWrapperOrderGroup = {
    value?: OrderGroup;
};
export type ListResponseOrderLine = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: OrderLine[];
};
export type ResponseWrapperOrderLine = {
    value?: OrderLine;
};
export type ExternalProduct = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    elNumber?: string;
    nrfNumber?: string;
    costExcludingVatCurrency?: number;
    priceExcludingVatCurrency?: number;
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    vatType?: VatType;
    currency?: Currency;
    department?: Department;
    account?: Account;
    discountPrice?: number;
};
export type ResponseWrapperExternalProduct = {
    value?: ExternalProduct;
};
export type ListResponseExternalProduct = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ExternalProduct[];
};
export type ListResponseProduct = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Product[];
};
export type ResponseWrapperProduct = {
    value?: Product;
};
export type SupplierProduct = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    "number"?: string;
    description?: string;
    ean?: string;
    costExcludingVatCurrency?: number;
    priceExcludingVatCurrency?: number;
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    stockOfGoods?: number;
    vatType?: VatType;
    currency?: Currency;
    discountPrice?: number;
    supplier?: Supplier;
    resaleProduct?: Product;
    isDeletable?: boolean;
    vendorName?: string;
    isEfoNelfoProduct?: boolean;
    wholesalerId?: number;
};
export type ListResponseSupplierProduct = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SupplierProduct[];
};
export type ResponseWrapperSupplierProduct = {
    value?: SupplierProduct;
};
export type ResponseWrapperDiscountGroup = {
    value?: DiscountGroup;
};
export type ListResponseDiscountGroup = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: DiscountGroup[];
};
export type ProductInventoryLocation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    product: Product;
    inventory: Inventory;
    inventoryLocation?: InventoryLocation;
    isMainLocation?: boolean;
    stockOfGoods?: number;
};
export type ListResponseProductInventoryLocation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductInventoryLocation[];
};
export type ResponseWrapperProductInventoryLocation = {
    value?: ProductInventoryLocation;
};
export type LogisticsSettings = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    hasWarehouseLocation?: boolean;
    showOnboardingWizard?: boolean;
    moduleSuggestedProductNumber?: boolean;
    suggestedProductNumber?: string;
};
export type ResponseWrapperLogisticsSettings = {
    value?: LogisticsSettings;
};
export type ProductGroup = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name: string;
    parentGroup?: ProductGroup;
    isDeletable?: boolean;
};
export type ListResponseProductGroup = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductGroup[];
};
export type ResponseWrapperProductGroup = {
    value?: ProductGroup;
};
export type ProductGroupRelation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    product: Product;
    productGroup: ProductGroup;
};
export type ListResponseProductGroupRelation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductGroupRelation[];
};
export type ResponseWrapperProductGroupRelation = {
    value?: ProductGroupRelation;
};
export type TlxNumber = object;
export type ProductPrice = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    product?: Product;
    fromDate?: string;
    toDate?: string;
    purchasePrice?: TlxNumber;
    purchasePriceCurrency?: number;
    costPrice?: TlxNumber;
    salesPriceExcludingVat?: TlxNumber;
    vatType?: VatType;
    salesPriceIncludingVat?: TlxNumber;
};
export type ListResponseProductPrice = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductPrice[];
};
export type ListResponseProductUnit = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductUnit[];
};
export type ResponseWrapperProductUnit = {
    value?: ProductUnit;
};
export type ProductUnitMaster = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    nameShort?: string;
    commonCode?: string;
    peppolName?: string;
    peppolSymbol?: string;
    isInactive?: boolean;
};
export type ResponseWrapperProductUnitMaster = {
    value?: ProductUnitMaster;
};
export type ListResponseProductUnitMaster = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProductUnitMaster[];
};
export type ListResponseProject = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Project[];
};
export type ResponseWrapperProject = {
    value?: Project;
};
export type ListResponseProjectCategory = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectCategory[];
};
export type ResponseWrapperProjectCategory = {
    value?: ProjectCategory;
};
export type ListResponseProjectOrderLine = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectOrderLine[];
};
export type ResponseWrapperProjectOrderLine = {
    value?: ProjectOrderLine;
};
export type ListResponseProjectParticipant = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectParticipant[];
};
export type ResponseWrapperProjectParticipant = {
    value?: ProjectParticipant;
};
export type ProjectPeriodInvoicingReserve = {
    invoiceFeeReserveCurrency?: number;
    periodOrderLinesIncomeCurrency?: number;
    invoiceExtracostsReserveCurrency?: number;
    invoiceAkontoReserveAmountCurrency?: number;
    invoiceReserveTotalAmountCurrency?: number;
};
export type ResponseWrapperProjectPeriodInvoicingReserve = {
    value?: ProjectPeriodInvoicingReserve;
};
export type ProjectPeriodInvoiced = {
    sumAmountPaid?: number;
    sumAmountOutstanding?: number;
    sumAmountDue?: number;
    sumAmountDueOutstanding?: number;
    sumAmount?: number;
};
export type ResponseWrapperProjectPeriodInvoiced = {
    value?: ProjectPeriodInvoiced;
};
export type ProjectPeriodOverallStatus = {
    income?: number;
    costs?: number;
};
export type ResponseWrapperProjectPeriodOverallStatus = {
    value?: ProjectPeriodOverallStatus;
};
export type ProjectPeriodMonthlyStatus = {
    income?: number;
    costs?: number;
    dateFrom?: string;
    dateTo?: string;
};
export type ListResponseProjectPeriodMonthlyStatus = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectPeriodMonthlyStatus[];
};
export type ProjectPeriodHourlyReport = {
    chargeableHours?: number;
    nonChargeableHours?: number;
    approvedButUnchargedHours?: number;
    nonApprovedHours?: number;
    registeredHours?: number;
};
export type ResponseWrapperProjectPeriodHourlyReport = {
    value?: ProjectPeriodHourlyReport;
};
export type ProjectBudgetStatus = {
    totalTotalIncomeCurrency?: number;
    budgetTotalIncomeCurrency?: number;
};
export type ResponseWrapperProjectBudgetStatus = {
    value?: ProjectBudgetStatus;
};
export type ResponseWrapperProjectActivity = {
    value?: ProjectActivity;
};
export type ProjectControlForm = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    title: string;
    comment: string;
    completed?: boolean;
    signatureRequired?: boolean;
    signed?: boolean;
    controlForm?: string;
};
export type ResponseWrapperProjectControlForm = {
    value?: ProjectControlForm;
};
export type ListResponseProjectControlForm = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectControlForm[];
};
export type ProjectControlFormType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
};
export type ResponseWrapperProjectControlFormType = {
    value?: ProjectControlFormType;
};
export type ListResponseProjectControlFormType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectControlFormType[];
};
export type ListResponseProjectHourlyRate = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectHourlyRate[];
};
export type ResponseWrapperProjectHourlyRate = {
    value?: ProjectHourlyRate;
};
export type HourlyRate = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    startDate: string;
    hourlyRateModel: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    projectSpecificRates?: ProjectSpecificRate[];
    fixedRate?: number;
};
export type ListResponseProjectSpecificRate = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ProjectSpecificRate[];
};
export type ResponseWrapperProjectSpecificRate = {
    value?: ProjectSpecificRate;
};
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
    periodType?: "DAY" | "WEEK" | "MONTH";
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
    autoGenerateProjectNumber?: boolean;
    autoGenerateStartingNumber?: number;
    projectNameScheme?: "NAME_STANDARD" | "NAME_INCL_CUSTOMER_NAME" | "NAME_INCL_PARENT_NAME" | "NAME_INCL_PARENT_NUMBER" | "NAME_INCL_PARENT_NAME_AND_NUMBER";
    projectTypeOfContract?: "PROJECT_FIXED_PRICE" | "PROJECT_HOUR_RATES";
    projectOrderLinesSortOrder?: "SORT_ORDER_ID" | "SORT_ORDER_DATE" | "SORT_ORDER_PRODUCT" | "SORT_ORDER_CUSTOM";
    projectHourlyRateModel?: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    onlyProjectMembersCanRegisterInfo?: boolean;
    onlyProjectActivitiesTimesheetRegistration?: boolean;
    hourlyRateProjectsWriteUpDown?: boolean;
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
};
export type ResponseWrapperProjectSettings = {
    value?: ProjectSettings;
};
export type Task = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    status?: string;
};
export type ListResponseTask = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Task[];
};
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
export type Prospect = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
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
    totalValue?: number;
};
export type ListResponseProspect = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Prospect[];
};
export type ResponseWrapperProspect = {
    value?: Prospect;
};
export type TransportType = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    nameKey?: string;
    code?: string;
    isPickUp?: boolean;
};
export type PickupPoint = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    code?: string;
    name?: string;
    transportType?: TransportType;
};
export type ResponseWrapperPickupPoint = {
    value?: PickupPoint;
};
export type ListResponsePickupPoint = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PickupPoint[];
};
export type PurchaseOrderline = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    purchaseOrder: PurchaseOrder;
    product?: Product;
    resaleProduct?: Product;
    description?: string;
    count?: number;
    quantityReceived?: number;
    unitCostCurrency?: number;
    unitPriceExcludingVatCurrency?: number;
    unitListPriceCurrency?: number;
    currency?: Currency;
    discount?: number;
    amountExcludingVatCurrency?: number;
    amountIncludingVatCurrency?: number;
};
export type PurchaseOrder = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    "number"?: string;
    receiverEmail?: string;
    discount?: number;
    internalComment?: string;
    packingNoteMessage?: string;
    transporterMessage?: string;
    comments?: string;
    supplier: Supplier;
    deliveryDate: string;
    receivedDate?: string;
    orderLines?: PurchaseOrderline[];
    project?: Project;
    department?: Department;
    deliveryAddress?: Address;
    creationDate?: string;
    isClosed?: boolean;
    ourContact: Employee;
    supplierContact?: Employee;
    attention?: Employee;
    status?: "STATUS_OPEN" | "STATUS_SENT" | "STATUS_RECEIVING" | "STATUS_CONFIRMED_DEVIATION_DETECTED" | "STATUS_DEVIATION_OPEN" | "STATUS_DEVIATION_CONFIRMED" | "STATUS_CONFIRMED" | "STATUS_CANCELLED";
    currency?: Currency;
    restorder?: PurchaseOrder;
    transportType?: TransportType;
    pickupPoint?: PickupPoint;
    document?: Document;
    attachment?: Document;
    ediDocument?: Document;
    lastSentTimestamp?: string;
    lastSentEmployeeName?: string;
};
export type ListResponsePurchaseOrder = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrder[];
};
export type ResponseWrapperPurchaseOrder = {
    value?: PurchaseOrder;
};
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
    formDataContentDisposition?: FormDataContentDisposition;
    simple?: boolean;
    name?: string;
    value?: string;
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
export type ResponseWrapperTransportType = {
    value?: TransportType;
};
export type ListResponseTransportType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TransportType[];
};
export type Deviation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    purchaseOrderLine: PurchaseOrderline;
    date: string;
    cause?: "CAUSE_DEFECT" | "CAUSE_TOO_FEW" | "CAUSE_TOO_MANY" | "CAUSE_REPLACEMENT";
    action?: "ACTION_IGNORE" | "ACTION_GENERATE_RESTORDER" | "ACTION_RETURN" | "ACTION_RETURN_GENERATE_RESTORDER";
    comment?: string;
    receivedBy?: string;
    quantityOrdered?: number;
    quantityReceived?: number;
    deviation?: number;
};
export type ListResponseDeviation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Deviation[];
};
export type ResponseWrapperDeviation = {
    value?: Deviation;
};
export type GoodsReceiptLine = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    purchaseOrder?: PurchaseOrder;
    product: Product;
    resaleProduct?: Product;
    inventory?: Inventory;
    inventoryLocation?: InventoryLocation;
    quantityOrdered?: number;
    quantityReceived: number;
    quantityRest?: number;
    deviation?: number;
};
export type GoodsReceipt = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    purchaseOrder?: PurchaseOrder;
    registrationDate: string;
    receivedBy?: Employee;
    status?: "STATUS_OPEN" | "STATUS_CONFIRMED";
    comment?: string;
    goodsReceiptLines: GoodsReceiptLine[];
};
export type ListResponseGoodsReceipt = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: GoodsReceipt[];
};
export type ResponseWrapperGoodsReceipt = {
    value?: GoodsReceipt;
};
export type ListResponseGoodsReceiptLine = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: GoodsReceiptLine[];
};
export type ResponseWrapperGoodsReceiptLine = {
    value?: GoodsReceiptLine;
};
export type PurchaseOrderIncomingInvoiceRelation = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    orderOut: PurchaseOrder;
    voucher: Voucher;
};
export type ListResponsePurchaseOrderIncomingInvoiceRelation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrderIncomingInvoiceRelation[];
};
export type ResponseWrapperPurchaseOrderIncomingInvoiceRelation = {
    value?: PurchaseOrderIncomingInvoiceRelation;
};
export type ListResponsePurchaseOrderline = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PurchaseOrderline[];
};
export type ResponseWrapperPurchaseOrderline = {
    value?: PurchaseOrderline;
};
export type ResponseWrapperReminder = {
    value?: Reminder;
};
export type ListResponseReminder = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Reminder[];
};
export type ResultBudget = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    account: Account;
    accountingPeriod: AccountingPeriod;
    amount?: number;
    department?: Department;
    project?: Project;
    product?: Product;
    employee?: Employee;
};
export type ListResponseResultBudget = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: ResultBudget[];
};
export type ListResponseSalaryType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SalaryType[];
};
export type ResponseWrapperSalaryType = {
    value?: SalaryType;
};
export type SalaryCompilationLine = {
    description?: string;
    amount?: number;
    taxable?: boolean;
    taxableDescription?: string;
};
export type SalaryCompilation = {
    employee?: number;
    year?: number;
    vacationPayBasis?: number;
    wages?: SalaryCompilationLine[];
    expenses?: SalaryCompilationLine[];
    taxDeductions?: SalaryCompilationLine[];
    mandatoryTaxDeductions?: SalaryCompilationLine[];
};
export type ResponseWrapperSalaryCompilation = {
    value?: SalaryCompilation;
};
export type ListResponsePayslip = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Payslip[];
};
export type ResponseWrapperPayslip = {
    value?: Payslip;
};
export type SalarySettings = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    municipality?: Municipality;
    payrollTaxCalcMethod: "AA" | "BB" | "CC" | "DD" | "EE" | "GG" | "JJ" | "EMPTY";
};
export type ResponseWrapperSalarySettings = {
    value?: SalarySettings;
};
export type CompanyHoliday = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    year?: number;
    days?: number;
    vacationPayPercentage1?: number;
    vacationPayPercentage2?: number;
    isMaxPercentage2Amount6G?: boolean;
};
export type ListResponseCompanyHoliday = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyHoliday[];
};
export type ResponseWrapperCompanyHoliday = {
    value?: CompanyHoliday;
};
export type PensionScheme = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    "number": string;
    startDate: string;
    endDate?: string;
};
export type ListResponsePensionScheme = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PensionScheme[];
};
export type ResponseWrapperPensionScheme = {
    value?: PensionScheme;
};
export type ResponseWrapperSalaryTransaction = {
    value?: SalaryTransaction;
};
export type ListResponseSupplier = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Supplier[];
};
export type ResponseWrapperSupplier = {
    value?: Supplier;
};
export type VoucherApprovalListElement = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    voucher?: Voucher;
    employee?: Employee;
    status?: number;
    organisationLevel?: number;
    department?: Department;
    project?: Project;
    comment?: string;
    commentFromOriginator?: string;
    actionDate?: string;
};
export type SupplierInvoice = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    invoiceNumber?: string;
    invoiceDate: string;
    supplier?: Supplier;
    invoiceDueDate: string;
    kidOrReceiverReference?: string;
    voucher?: Voucher;
    amount?: number;
    amountCurrency?: number;
    amountExcludingVat?: number;
    amountExcludingVatCurrency?: number;
    currency?: Currency;
    isCreditNote?: boolean;
    orderLines?: OrderLine[];
    payments?: Posting[];
    originalInvoiceDocumentId?: number;
    approvalListElements?: VoucherApprovalListElement[];
};
export type ListResponseSupplierInvoice = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: SupplierInvoice[];
};
export type ResponseWrapperSupplierInvoice = {
    value?: SupplierInvoice;
};
export type ResponseWrapperVoucherApprovalListElement = {
    value?: VoucherApprovalListElement;
};
export type CompanyHolidays = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    date: string;
    percentage: number;
};
export type ListResponseCompanyHolidays = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: CompanyHolidays[];
};
export type ResponseWrapperCompanyHolidays = {
    value?: CompanyHolidays;
};
export type TimeClock = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee: Employee;
    project?: Project;
    activity?: Activity;
    timesheetEntry: TimesheetEntry;
    date: string;
    timeStart: string;
    timeStop: string;
    hoursStart?: number;
    lunchBreakDuration?: number;
};
export type TimesheetEntry = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    project?: Project;
    activity: Activity;
    date: string;
    hours: number;
    chargeableHours?: number;
    employee: Employee;
    timeClocks?: TimeClock[];
    comment?: string;
    locked?: boolean;
    chargeable?: boolean;
    invoice?: Invoice;
    hourlyRate?: number;
    hourlyCost?: number;
    hourlyCostPercentage?: number;
};
export type ListResponseTimesheetEntry = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetEntry[];
};
export type TimesheetEntrySearchResponse = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetEntry[];
    sumAllHours?: number;
};
export type ResponseWrapperTimesheetEntry = {
    value?: TimesheetEntry;
};
export type ResponseWrapperBigDecimal = {
    value?: number;
};
export type HourSummary = {
    sumHours?: number;
    hoursWithPay?: number;
    hourlyWageHoursWithPay?: number;
    standardTime?: number;
    nonChargeableHours?: number;
    chargeableHours?: number;
    nonChargeableHoursWithPay?: number;
    budgetChargeableHours?: number;
};
export type FlexSummary = {
    incomingHourBalance?: number;
    outgoingHourBalance?: number;
    change?: number;
};
export type EmployeePeriod = {
    incomingVacationBalance?: number;
    outgoingVacationBalance?: number;
    vacationTakenInPeriod?: number;
    vacationTakenThisYear?: number;
};
export type MonthlyStatus = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee?: Employee;
    timesheetEntries?: TimesheetEntry[];
    approvedDate?: string;
    completed?: boolean;
    approvedBy?: Employee;
    approved?: boolean;
    approvedUntilDate?: string;
    monthYear?: string;
    hoursPayout?: number;
    vacationPayout?: number;
    hourSummary?: HourSummary;
    flexSummary?: FlexSummary;
    vacationSummary?: EmployeePeriod;
};
export type ListResponseMonthlyStatus = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: MonthlyStatus[];
};
export type ResponseWrapperMonthlyStatus = {
    value?: MonthlyStatus;
};
export type TimesheetSalaryTypeSpecification = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee: Employee;
    salaryType: SalaryType;
    description?: string;
    date: string;
    count: number;
};
export type ListResponseTimesheetSalaryTypeSpecification = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimesheetSalaryTypeSpecification[];
};
export type ResponseWrapperTimesheetSalaryTypeSpecification = {
    value?: TimesheetSalaryTypeSpecification;
};
export type TimesheetSettings = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    timeClock?: boolean;
    timesheetCompleted?: boolean;
    flexBalance?: boolean;
    vacationBalance?: boolean;
    defaultProjectActivity?: Activity;
};
export type ResponseWrapperTimesheetSettings = {
    value?: TimesheetSettings;
};
export type ListResponseTimeClock = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TimeClock[];
};
export type ResponseWrapperTimeClock = {
    value?: TimeClock;
};
export type Week = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    employee?: Employee;
    timesheetEntries?: TimesheetEntry[];
    year?: number;
    week?: number;
    completed?: boolean;
    approved?: boolean;
    approvedBy?: Employee;
    approvedDate?: string;
};
export type ResponseWrapperWeek = {
    value?: Week;
};
export type ListResponseWeek = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Week[];
};
export type ListResponseAccommodationAllowance = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: AccommodationAllowance[];
};
export type ResponseWrapperAccommodationAllowance = {
    value?: AccommodationAllowance;
};
export type ListResponseCost = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Cost[];
};
export type ResponseWrapperCost = {
    value?: Cost;
};
export type ListResponseMileageAllowance = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: MileageAllowance[];
};
export type ResponseWrapperMileageAllowance = {
    value?: MileageAllowance;
};
export type ListResponsePassenger = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: Passenger[];
};
export type ResponseWrapperPassenger = {
    value?: Passenger;
};
export type ListResponsePerDiemCompensation = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: PerDiemCompensation[];
};
export type ResponseWrapperPerDiemCompensation = {
    value?: PerDiemCompensation;
};
export type ListResponseTravelExpense = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpense[];
};
export type ResponseWrapperTravelExpense = {
    value?: TravelExpense;
};
export type ListResponseTravelExpenseRate = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRate[];
};
export type ResponseWrapperTravelExpenseRate = {
    value?: TravelExpenseRate;
};
export type ListResponseTravelExpenseRateCategory = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRateCategory[];
};
export type ResponseWrapperTravelExpenseRateCategory = {
    value?: TravelExpenseRateCategory;
};
export type TravelExpenseRateCategoryGroup = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    name?: string;
    isForeignTravel?: boolean;
    fromDate: string;
    toDate: string;
};
export type ListResponseTravelExpenseRateCategoryGroup = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseRateCategoryGroup[];
};
export type ResponseWrapperTravelExpenseRateCategoryGroup = {
    value?: TravelExpenseRateCategoryGroup;
};
export type ResponseWrapperTravelCostCategory = {
    value?: TravelCostCategory;
};
export type ListResponseTravelCostCategory = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelCostCategory[];
};
export type ResponseWrapperTravelPaymentType = {
    value?: TravelPaymentType;
};
export type ListResponseTravelPaymentType = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelPaymentType[];
};
export type TravelExpenseSettings = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    useRates?: boolean;
    approvalRequired?: boolean;
    taxFreePerDiemRates?: boolean;
    taxFreeMileageRates?: boolean;
    perDiemNotCompensated?: boolean;
    accommodationNotCompensated?: boolean;
    mileageNotCompensated?: boolean;
};
export type ResponseWrapperTravelExpenseSettings = {
    value?: TravelExpenseSettings;
};
export type TravelExpenseZone = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    countryCode?: string;
    zoneName?: string;
    isDisabled?: boolean;
    governmentName?: string;
    continent?: string;
};
export type ResponseWrapperTravelExpenseZone = {
    value?: TravelExpenseZone;
};
export type ListResponseTravelExpenseZone = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: TravelExpenseZone[];
};
export type VatReturnsComment = {
    title?: string;
    technicalName?: string;
    description?: string;
    vatSpecificationType?: "DEFAULT" | "LOSS_OF_CLAIM" | "WITHDRAWAL" | "ADJUSTMENT" | "REVERSAL";
    expectedSign?: "ZERO" | "POSITIVE" | "NEGATIVE";
};
export type ListResponseVatReturnsComment = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatReturnsComment[];
};
export type VatReturnsVatCodeCommentDto = {
    vatCode?: string;
    comments?: VatReturnsComment[];
};
export type ListResponseVatReturnsVatCodeCommentDto = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VatReturnsVatCodeCommentDto[];
};
export type VoucherMessage = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    voucherId?: number;
    content?: string;
    sender?: Employee;
    sendTime?: string;
};
export type ListResponseVoucherMessage = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherMessage[];
};
export type ResponseWrapperVoucherMessage = {
    value?: VoucherMessage;
};
export type VoucherStatus = {
    id?: number;
    version?: number;
    changes?: Change[];
    url?: string;
    voucher?: Voucher;
    "type"?: "TRIPLETEX" | "SUPPLIERINVOICE_EXTERNAL" | "DEBT_COLLECTION";
    status?: "WAITING" | "DONE" | "SKIPPED" | "ERROR" | "NONE" | "PROCESSING" | "RECLAIMED";
    timestamp?: string;
    message?: "NONE" | "ONGOING" | "NEEDS_APPROVAL" | "WITHDRAWN" | "SETTLED";
    externalObjectUrl?: string;
    comment?: string;
    referenceNumber?: string;
};
export type ListResponseVoucherStatus = {
    fullResultSize?: number;
    "from"?: number;
    count?: number;
    versionDigest?: string;
    values?: VoucherStatus[];
};
export type ResponseWrapperVoucherStatus = {
    value?: VoucherStatus;
};
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
export type ResponseWrapperInteger = {
    value?: number;
};
/**
 * Add multiple activities.
 */
export function activityListPostList(body?: Activity[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseActivity;
    }>("/activity/list", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Find activities corresponding with sent data.
 */
export function activitySearch({ id, name, number, description, isProjectActivity, isGeneral, isChargeable, isTask, isInactive, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "number"?: string;
    description?: string;
    isProjectActivity?: boolean;
    isGeneral?: boolean;
    isChargeable?: boolean;
    isTask?: boolean;
    isInactive?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivity;
    }>(`/activity${QS.query(QS.form({
        id,
        name,
        number,
        description,
        isProjectActivity,
        isGeneral,
        isChargeable,
        isTask,
        isInactive,
        from,
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
export function activityPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperActivity;
    }>("/activity", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find applicable time sheet activities for an employee on a specific day.
 */
export function activityForTimeSheetGetForTimeSheet(projectId: number, { employeeId, date, from, count, sorting, fields }: {
    employeeId?: number;
    date?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivity;
    }>(`/activity/>forTimeSheet${QS.query(QS.form({
        projectId,
        employeeId,
        date,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find activity by ID.
 */
export function activityGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperActivity;
    }>(`/activity/${id}${QS.query(QS.form({
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
    }>(`/deliveryAddress/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update address.
 */
export function deliveryAddressPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeliveryAddress;
    }>(`/deliveryAddress/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find addresses corresponding with sent data.
 */
export function deliveryAddressSearch({ id, addressLine1, addressLine2, postalCode, city, name, from, count, sorting, fields }: {
    id?: string;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeliveryAddress;
    }>(`/deliveryAddress${QS.query(QS.form({
        id,
        addressLine1,
        addressLine2,
        postalCode,
        city,
        name,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create several assets.
 */
export function assetListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseAsset;
    }>("/asset/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find assets corresponding with sent data.
 */
export function assetSearch({ id, name, description, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    description?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAsset;
    }>(`/asset${QS.query(QS.form({
        id,
        name,
        description,
        from,
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
export function assetPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperAsset;
    }>("/asset", {
        ...opts,
        method: "POST",
        body
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
    }>(`/asset/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update asset.
 */
export function assetPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAsset;
    }>(`/asset/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete asset.
 */
export function assetDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/asset/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get balance sheet (saldobalanse).
 */
export function balanceSheetSearch(dateFrom: string, dateTo: string, { accountNumberFrom, accountNumberTo, customerId, employeeId, departmentId, projectId, includeSubProjects, includeActiveAccountsWithoutMovements, from, count, sorting, fields }: {
    accountNumberFrom?: number;
    accountNumberTo?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    includeSubProjects?: boolean;
    includeActiveAccountsWithoutMovements?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBalanceSheetAccount;
    }>(`/balanceSheet${QS.query(QS.form({
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
        from,
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
    }>(`/bank/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank corresponding with sent data.
 */
export function bankSearch({ id, registerNumbers, isBankReconciliationSupport, isAutoPaySupported, isZtlSupported, from, count, sorting, fields }: {
    id?: string;
    registerNumbers?: string;
    isBankReconciliationSupport?: boolean;
    isAutoPaySupported?: boolean;
    isZtlSupported?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBank;
    }>(`/bank${QS.query(QS.form({
        id,
        registerNumbers,
        isBankReconciliationSupport,
        isAutoPaySupported,
        isZtlSupported,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank reconciliation corresponding with sent data.
 */
export function bankReconciliationSearch({ id, accountingPeriodId, accountId, from, count, sorting, fields }: {
    id?: string;
    accountingPeriodId?: string;
    accountId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliation;
    }>(`/bank/reconciliation${QS.query(QS.form({
        id,
        accountingPeriodId,
        accountId,
        from,
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
export function bankReconciliationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperBankReconciliation;
    }>("/bank/reconciliation", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/bank/reconciliation/>lastClosed${QS.query(QS.form({
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
    }>(`/bank/reconciliation/closedWithUnmatchedTransactions${QS.query(QS.form({
        accountId,
        start,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Add an adjustment to reconciliation by ID.
 */
export function bankReconciliationAdjustmentAdjustment(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationAdjustment;
    }>(`/bank/reconciliation/${id}/:adjustment`, {
        ...opts,
        method: "PUT",
        body
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
    }>(`/bank/reconciliation/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a bank reconciliation.
 */
export function bankReconciliationPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliation;
    }>(`/bank/reconciliation/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete bank reconciliation by ID.
 */
export function bankReconciliationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/reconciliation/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find bank reconciliation match corresponding with sent data.
 */
export function bankReconciliationMatchSearch({ id, bankReconciliationId, count, approved, from, sorting, fields }: {
    id?: string;
    bankReconciliationId?: string;
    count?: number;
    approved?: boolean;
    "from"?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationMatch;
    }>(`/bank/reconciliation/match${QS.query(QS.form({
        id,
        bankReconciliationId,
        count,
        approved,
        from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create a bank reconciliation match.
 */
export function bankReconciliationMatchPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperBankReconciliationMatch;
    }>("/bank/reconciliation/match", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Suggest matches for a bank reconciliation by ID.
 */
export function bankReconciliationMatchSuggestSuggest(bankReconciliationId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationMatch;
    }>(`/bank/reconciliation/match/:suggest${QS.query(QS.form({
        bankReconciliationId
    }))}`, {
        ...opts,
        method: "PUT"
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
    }>(`/bank/reconciliation/match/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a bank reconciliation match by ID.
 */
export function bankReconciliationMatchPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankReconciliationMatch;
    }>(`/bank/reconciliation/match/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete a bank reconciliation match by ID.
 */
export function bankReconciliationMatchDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/reconciliation/match/${id}`, {
        ...opts,
        method: "DELETE"
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
    }>(`/bank/reconciliation/matches/counter${QS.query(QS.form({
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
    return oazapfts.fetchText(`/bank/reconciliation/matches/counter${QS.query(QS.form({
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
    }>(`/bank/reconciliation/paymentType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payment type corresponding with sent data.
 */
export function bankReconciliationPaymentTypeSearch({ id, description, from, count, sorting, fields }: {
    id?: string;
    description?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankReconciliationPaymentType;
    }>(`/bank/reconciliation/paymentType${QS.query(QS.form({
        id,
        description,
        from,
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
        status: 201;
        data: ResponseWrapperBankStatement;
    }>(`/bank/statement/import${QS.query(QS.form({
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
 * Get bank statement.
 */
export function bankStatementGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperBankStatement;
    }>(`/bank/statement/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete bank statement by ID.
 */
export function bankStatementDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/bank/statement/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find bank statement corresponding with sent data.
 */
export function bankStatementSearch({ id, accountId, fileFormat, from, count, sorting, fields }: {
    id?: string;
    accountId?: string;
    fileFormat?: "DNB_CSV" | "EIKA_TELEPAY" | "SPAREBANK1_TELEPAY" | "VISMA_ACCOUNT_STATEMENT" | "HANDELSBANKEN_TELEPAY" | "SPAREBANKEN_VEST_TELEPAY" | "NORDEA_CSV" | "TRANSFERWISE" | "SPAREBANKEN_SOR_TELEPAY" | "SPAREBANKEN_OST_TELEPAY" | "DANSKE_BANK_CSV" | "CULTURA_BANK_TELEPAY" | "SBANKEN_PRIVAT_CSV" | "HAUGESUND_SPAREBANK_CSV" | "VISMA_ACCOUNT_STATEMENT_PSD2" | "SBANKEN_BEDRIFT_CSV" | "LANDKREDITT_TELEPAY" | "ZTL";
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankStatement;
    }>(`/bank/statement${QS.query(QS.form({
        id,
        accountId,
        fileFormat,
        from,
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
    }>(`/bank/statement/transaction/${id}/details${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
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
    }>(`/bank/statement/transaction/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find bank transaction corresponding with sent data.
 */
export function bankStatementTransactionSearch(bankStatementId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseBankTransaction;
    }>(`/bank/statement/transaction${QS.query(QS.form({
        bankStatementId,
        from,
        count,
        sorting,
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
    }>(`/token/consumer/byToken${QS.query(QS.form({
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
    }>(`/token/employee/:create${QS.query(QS.form({
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
 * Find information about the current user.
 */
export function tokenSessionWhoAmIWhoAmI({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLoggedInUserInfoDto;
    }>(`/token/session/>whoAmI${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete session token.
 */
export function tokenSessionDelete(token: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/token/session/${token}`, {
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
    }>(`/token/session/:create${QS.query(QS.form({
        consumerToken,
        employeeToken,
        expirationDate
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
 */
export function companyWithLoginAccessGetWithLoginAccess({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompany;
    }>(`/company/>withLoginAccess${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [DEPRECATED] Find divisions.
 */
export function companyDivisionsGetDivisions({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompany;
    }>(`/company/divisions${QS.query(QS.form({
        from,
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
    }>(`/company/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update company information.
 */
export function companyPut(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompany;
    }>("/company", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Find Altinn id for login in company.
 */
export function companySettingsAltinnSearch({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAltinnCompanyModule;
    }>(`/company/settings/altinn${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update AltInn id and password.
 */
export function companySettingsAltinnPut(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAltinnCompanyModule;
    }>("/company/settings/altinn", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Get active sales modules.
 */
export function companySalesmodulesGet({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSalesModuleDto;
    }>(`/company/salesmodules${QS.query(QS.form({
        from,
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
export function companySalesmodulesPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperSalesModuleDto;
    }>("/company/salesmodules", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find contacts corresponding with sent data.
 */
export function contactSearch({ id, firstName, lastName, email, customerId, departmentId, from, count, sorting, fields }: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    customerId?: string;
    departmentId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseContact;
    }>(`/contact${QS.query(QS.form({
        id,
        firstName,
        lastName,
        email,
        customerId,
        departmentId,
        from,
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
export function contactPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperContact;
    }>("/contact", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/contact/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update contact.
 */
export function contactPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperContact;
    }>(`/contact/${id}`, {
        ...opts,
        method: "PUT",
        body
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
    }>(`/country/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find countries corresponding with sent data.
 */
export function countrySearch({ id, code, isDisabled, from, count, sorting, fields }: {
    id?: string;
    code?: string;
    isDisabled?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCountry;
    }>(`/country${QS.query(QS.form({
        id,
        code,
        isDisabled,
        from,
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
    }>(`/currency/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find currencies corresponding with sent data.
 */
export function currencySearch({ id, code, from, count, sorting, fields }: {
    id?: string;
    code?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCurrency;
    }>(`/currency${QS.query(QS.form({
        id,
        code,
        from,
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
    }>(`/currency/${id}/rate${QS.query(QS.form({
        date,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create multiple customers. Related supplier addresses may also be created.
 */
export function customerListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseCustomer;
    }>("/customer/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple customers. Addresses can also be updated.
 */
export function customerListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomer;
    }>("/customer/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find customers corresponding with sent data.
 */
export function customerSearch({ id, customerAccountNumber, organizationNumber, email, invoiceEmail, isInactive, accountManagerId, changedSince, from, count, sorting, fields }: {
    id?: string;
    customerAccountNumber?: string;
    organizationNumber?: string;
    email?: string;
    invoiceEmail?: string;
    isInactive?: boolean;
    accountManagerId?: string;
    changedSince?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomer;
    }>(`/customer${QS.query(QS.form({
        id,
        customerAccountNumber,
        organizationNumber,
        email,
        invoiceEmail,
        isInactive,
        accountManagerId,
        changedSince,
        from,
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
export function customerPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperCustomer;
    }>("/customer", {
        ...opts,
        method: "POST",
        body
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
    }>(`/customer/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update customer.
 */
export function customerPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomer;
    }>(`/customer/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete customer by ID
 */
export function customerDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/customer/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find customer/supplier categories corresponding with sent data.
 */
export function customerCategorySearch({ id, name, number, description, type, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "number"?: string;
    description?: string;
    "type"?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCustomerCategory;
    }>(`/customer/category${QS.query(QS.form({
        id,
        name,
        number,
        description,
        type,
        from,
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
export function customerCategoryPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperCustomerCategory;
    }>("/customer/category", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/customer/category/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update customer/supplier category.
 */
export function customerCategoryPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCustomerCategory;
    }>(`/customer/category/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Register new departments.
 */
export function departmentListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseDepartment;
    }>("/department/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple departments.
 */
export function departmentListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartment;
    }>("/department/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find department corresponding with sent data.
 */
export function departmentSearch({ id, name, departmentNumber, departmentManagerId, isInactive, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    departmentNumber?: string;
    departmentManagerId?: string;
    isInactive?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartment;
    }>(`/department${QS.query(QS.form({
        id,
        name,
        departmentNumber,
        departmentManagerId,
        isInactive,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add new department.
 */
export function departmentPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperDepartment;
    }>("/department", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/department/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update department.
 */
export function departmentPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDepartment;
    }>(`/department/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete department by ID
 */
export function departmentDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/department/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Wildcard search.
 */
export function departmentQueryQuery({ query, count, fields, from, sorting }: {
    query?: string;
    count?: number;
    fields?: string;
    "from"?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDepartment;
    }>(`/department/query${QS.query(QS.form({
        query,
        count,
        fields,
        from,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create divisions.
 */
export function divisionListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseDivision;
    }>("/division/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple divisions.
 */
export function divisionListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDivision;
    }>("/division/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Get divisions.
 */
export function divisionSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDivision;
    }>(`/division${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create division.
 */
export function divisionPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperDivision;
    }>("/division", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update division information.
 */
export function divisionPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDivision;
    }>(`/division/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Get content of document given by ID.
 */
export function documentContentDownloadContent(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/document/${id}/content`, {
        ...opts
    });
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
    }>(`/document/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload a file to the document archive reception. Send as multipart form.
 */
export function documentArchiveReceptionReceptionPost(body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
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
export function documentArchiveProjectGetProject(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/project/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/project/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with customer object type.
 */
export function documentArchiveCustomerGetCustomer(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/customer/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/customer/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with supplier object type.
 */
export function documentArchiveSupplierGetSupplier(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/supplier/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/supplier/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with employee object type.
 */
export function documentArchiveEmployeeGetEmployee(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/employee/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/employee/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with product object type.
 */
export function documentArchiveProductGetProduct(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/product/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/product/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with account object type.
 */
export function documentArchiveAccountGetAccount(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/account/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/account/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Find documents archived associated with prospect object type.
 */
export function documentArchiveProspectGetProspect(id: number, { periodDateFrom, periodDateTo, from, count, sorting, fields }: {
    periodDateFrom?: string;
    periodDateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDocumentArchive;
    }>(`/documentArchive/prospect/${id}${QS.query(QS.form({
        periodDateFrom,
        periodDateTo,
        from,
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
        status: 201;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/prospect/${id}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Update document archive.
 */
export function documentArchivePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDocumentArchive;
    }>(`/documentArchive/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete document archive.
 */
export function documentArchiveDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/documentArchive/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Create several employees.
 */
export function employeeListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseEmployee;
    }>("/employee/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find employees corresponding with sent data.
 */
export function employeeSearch({ id, firstName, lastName, employeeNumber, allowInformationRegistration, includeContacts, departmentId, onlyProjectManagers, onlyContacts, assignableProjectManagers, periodStart, periodEnd, hasSystemAccess, from, count, sorting, fields }: {
    id?: string;
    firstName?: string;
    lastName?: string;
    employeeNumber?: string;
    allowInformationRegistration?: boolean;
    includeContacts?: boolean;
    departmentId?: string;
    onlyProjectManagers?: boolean;
    onlyContacts?: boolean;
    assignableProjectManagers?: boolean;
    periodStart?: string;
    periodEnd?: string;
    hasSystemAccess?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployee;
    }>(`/employee${QS.query(QS.form({
        id,
        firstName,
        lastName,
        employeeNumber,
        allowInformationRegistration,
        includeContacts,
        departmentId,
        onlyProjectManagers,
        onlyContacts,
        assignableProjectManagers,
        periodStart,
        periodEnd,
        hasSystemAccess,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create one employee.
 */
export function employeePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperEmployee;
    }>("/employee", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/employee/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update employee.
 */
export function employeePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployee;
    }>(`/employee/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Create new employee categories.
 */
export function employeeCategoryListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseEmployeeCategory;
    }>("/employee/category/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple employee categories.
 */
export function employeeCategoryListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeCategory;
    }>("/employee/category/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete multiple employee categories
 */
export function employeeCategoryListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/employee/category/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find employee category corresponding with sent data.
 */
export function employeeCategorySearch({ id, name, number, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "number"?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployeeCategory;
    }>(`/employee/category${QS.query(QS.form({
        id,
        name,
        number,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a new employee category.
 */
export function employeeCategoryPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperEmployeeCategory;
    }>("/employee/category", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get employee category by ID.
 */
export function employeeCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeCategory;
    }>(`/employee/category/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update employee category information.
 */
export function employeeCategoryPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeeCategory;
    }>(`/employee/category/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete employee category by ID
 */
export function employeeCategoryDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/employee/category/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find all employments for employee.
 */
export function employeeEmploymentSearch({ employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmployment;
    }>(`/employee/employment${QS.query(QS.form({
        employeeId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create employment.
 */
export function employeeEmploymentPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperEmployment;
    }>("/employee/employment", {
        ...opts,
        method: "POST",
        body
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
    }>(`/employee/employment/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update employemnt.
 */
export function employeeEmploymentPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployment;
    }>(`/employee/employment/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Find all employmentdetails for employment.
 */
export function employeeEmploymentDetailsSearch({ employmentId, from, count, sorting, fields }: {
    employmentId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentDetails;
    }>(`/employee/employment/details${QS.query(QS.form({
        employmentId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create employment details.
 */
export function employeeEmploymentDetailsPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperEmploymentDetails;
    }>("/employee/employment/details", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find employment details by ID.
 */
export function employeeEmploymentDetailsGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmploymentDetails;
    }>(`/employee/employment/details/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update employment details.
 */
export function employeeEmploymentDetailsPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmploymentDetails;
    }>(`/employee/employment/details/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Find all maritime employment type IDs.
 */
export function employeeEmploymentEmploymentTypeMaritimeEmploymentTypeGetMaritimeEmploymentType(type: "SHIP_REGISTER" | "SHIP_TYPE" | "TRADE_AREA", { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentType;
    }>(`/employee/employment/employmentType/maritimeEmploymentType${QS.query(QS.form({
        type,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all salary type IDs.
 */
export function employeeEmploymentEmploymentTypeSalaryTypeGetSalaryType({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentType;
    }>(`/employee/employment/employmentType/salaryType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all schedule type IDs.
 */
export function employeeEmploymentEmploymentTypeScheduleTypeGetScheduleType({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentType;
    }>(`/employee/employment/employmentType/scheduleType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all employment form type IDs.
 */
export function employeeEmploymentEmploymentTypeEmploymentFormTypeGetEmploymentFormType({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentType;
    }>(`/employee/employment/employmentType/employmentFormType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all employment end reason type IDs.
 */
export function employeeEmploymentEmploymentTypeEmploymentEndReasonTypeGetEmploymentEndReasonType({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentType;
    }>(`/employee/employment/employmentType/employmentEndReasonType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all employment type IDs.
 */
export function employeeEmploymentEmploymentTypeSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEmploymentType;
    }>(`/employee/employment/employmentType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create multiple leave of absences.
 */
export function employeeEmploymentLeaveOfAbsenceListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseLeaveOfAbsence;
    }>("/employee/employment/leaveOfAbsence/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Create leave of absence.
 */
export function employeeEmploymentLeaveOfAbsencePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperLeaveOfAbsence;
    }>("/employee/employment/leaveOfAbsence", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find leave of absence by ID.
 */
export function employeeEmploymentLeaveOfAbsenceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLeaveOfAbsence;
    }>(`/employee/employment/leaveOfAbsence/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update leave of absence.
 */
export function employeeEmploymentLeaveOfAbsencePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLeaveOfAbsence;
    }>(`/employee/employment/leaveOfAbsence/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Find all leave of absence type IDs.
 */
export function employeeEmploymentLeaveOfAbsenceTypeSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLeaveOfAbsenceType;
    }>(`/employee/employment/leaveOfAbsenceType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all profession codes.
 */
export function employeeEmploymentOccupationCodeSearch({ nameNo, code, from, count, sorting, fields }: {
    nameNo?: string;
    code?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOccupationCode;
    }>(`/employee/employment/occupationCode${QS.query(QS.form({
        nameNO: nameNo,
        code,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all remuneration type IDs.
 */
export function employeeEmploymentRemunerationTypeSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseRemunerationType;
    }>(`/employee/employment/remunerationType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find working hours scheme ID.
 */
export function employeeEmploymentWorkingHoursSchemeSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseWorkingHoursScheme;
    }>(`/employee/employment/workingHoursScheme${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find all hourly cost and rates for employee.
 */
export function employeeHourlyCostAndRateSearch({ employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseHourlyCostAndRate;
    }>(`/employee/hourlyCostAndRate${QS.query(QS.form({
        employeeId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create hourly cost and rate.
 */
export function employeeHourlyCostAndRatePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperHourlyCostAndRate;
    }>("/employee/hourlyCostAndRate", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find hourly cost and rate by ID.
 */
export function employeeHourlyCostAndRateGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperHourlyCostAndRate;
    }>(`/employee/hourlyCostAndRate/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update hourly cost and rate.
 */
export function employeeHourlyCostAndRatePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperHourlyCostAndRate;
    }>(`/employee/hourlyCostAndRate/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find all next of kin for employee.
 */
export function employeeNextOfKinSearch({ employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseNextOfKin;
    }>(`/employee/nextOfKin${QS.query(QS.form({
        employeeId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create next of kin.
 */
export function employeeNextOfKinPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperNextOfKin;
    }>("/employee/nextOfKin", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find next of kin by ID.
 */
export function employeeNextOfKinGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperNextOfKin;
    }>(`/employee/nextOfKin/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update next of kin.
 */
export function employeeNextOfKinPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperNextOfKin;
    }>(`/employee/nextOfKin/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Get employee preferences for current user
 */
export function employeePreferencesLoggedInEmployeePreferencesLoggedInEmployeePreferences({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeePreferences;
    }>(`/employee/preferences/>loggedInEmployeePreferences${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find employee category corresponding with sent data.
 */
export function employeePreferencesSearch({ id, employeeId, fields }: {
    id?: string;
    employeeId?: number;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperEmployeePreferences;
    }>(`/employee/preferences${QS.query(QS.form({
        id,
        employeeId,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find all standard times for employee.
 */
export function employeeStandardTimeSearch({ employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseStandardTime;
    }>(`/employee/standardTime${QS.query(QS.form({
        employeeId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create standard time.
 */
export function employeeStandardTimePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperStandardTime;
    }>("/employee/standardTime", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find standard time by ID.
 */
export function employeeStandardTimeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStandardTime;
    }>(`/employee/standardTime/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update standard time.
 */
export function employeeStandardTimePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStandardTime;
    }>(`/employee/standardTime/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find all entitlements for user.
 */
export function employeeEntitlementSearch({ employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEntitlement;
    }>(`/employee/entitlement${QS.query(QS.form({
        employeeId,
        from,
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
    return oazapfts.fetchText(`/employee/entitlement/:grantClientEntitlementsByTemplate${QS.query(QS.form({
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
    return oazapfts.fetchText(`/employee/entitlement/:grantEntitlementsByTemplate${QS.query(QS.form({
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
export function employeeEntitlementClientClient({ employeeId, customerId, from, count, sorting, fields }: {
    employeeId?: number;
    customerId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseEntitlement;
    }>(`/employee/entitlement/client${QS.query(QS.form({
        employeeId,
        customerId,
        from,
        count,
        sorting,
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
    }>(`/employee/entitlement/${id}${QS.query(QS.form({
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
    }>(`/event/${eventType}${QS.query(QS.form({
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
    }>(`/event${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create multiple subscriptions for current EmployeeToken.
 */
export function eventSubscriptionListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseSubscription;
    }>("/event/subscription/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple subscription.
 */
export function eventSubscriptionListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSubscription;
    }>("/event/subscription/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete multiple subscriptions.
 */
export function eventSubscriptionListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/event/subscription/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find all ongoing subscriptions.
 */
export function eventSubscriptionSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSubscription;
    }>(`/event/subscription${QS.query(QS.form({
        from,
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
export function eventSubscriptionPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperSubscription;
    }>("/event/subscription", {
        ...opts,
        method: "POST",
        body
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
    }>(`/event/subscription/${id}${QS.query(QS.form({
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
    }>(`/event/subscription/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: subscription
    }));
}
/**
 * [BETA] Delete the given subscription.
 */
export function eventSubscriptionDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/event/subscription/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find inventory corresponding with sent data.
 */
export function inventorySearch({ id, name, isMainInventory, isInactive, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    isMainInventory?: boolean;
    isInactive?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventory;
    }>(`/inventory${QS.query(QS.form({
        id,
        name,
        isMainInventory,
        isInactive,
        from,
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
export function inventoryPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperInventory;
    }>("/inventory", {
        ...opts,
        method: "POST",
        body
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
    }>(`/inventory/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update inventory.
 */
export function inventoryPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventory;
    }>(`/inventory/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete inventory.
 */
export function inventoryDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find inventories corresponding with sent data.
 */
export function inventoryInventoriesSearch(dateFrom: string, dateTo: string, { productId, inventoryId, onlyProductWithChangedStatus, from, count, sorting, fields }: {
    productId?: number;
    inventoryId?: number;
    onlyProductWithChangedStatus?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventories;
    }>(`/inventory/inventories${QS.query(QS.form({
        dateFrom,
        dateTo,
        productId,
        inventoryId,
        onlyProductWithChangedStatus,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add multiple inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseInventoryLocation;
    }>("/inventory/location/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoryLocation;
    }>("/inventory/location/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/location/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find inventory locations by inventory ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationSearch({ warehouseId, isInactive, name, from, count, sorting, fields }: {
    warehouseId?: string;
    isInactive?: boolean;
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInventoryLocation;
    }>(`/inventory/location${QS.query(QS.form({
        warehouseId,
        isInactive,
        name,
        from,
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
export function inventoryLocationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperInventoryLocation;
    }>("/inventory/location", {
        ...opts,
        method: "POST",
        body
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
    }>(`/inventory/location/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInventoryLocation;
    }>(`/inventory/location/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function inventoryLocationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/location/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find stocktaking corresponding with sent data.
 */
export function inventoryStocktakingSearch({ id, isCompleted, inventoryId, from, count, sorting, fields }: {
    id?: string;
    isCompleted?: boolean;
    inventoryId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseStocktaking;
    }>(`/inventory/stocktaking${QS.query(QS.form({
        id,
        isCompleted,
        inventoryId,
        from,
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
export function inventoryStocktakingPost(body?: Blob, { typeOfStocktaking }: {
    typeOfStocktaking?: "ALL_PRODUCTS_WITH_INVENTORIES" | "INCLUDE_PRODUCTS" | "NO_PRODUCTS";
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperStocktaking;
    }>(`/inventory/stocktaking${QS.query(QS.form({
        typeOfStocktaking
    }))}`, {
        ...opts,
        method: "POST",
        body
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
    }>(`/inventory/stocktaking/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update stocktaking.
 */
export function inventoryStocktakingPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperStocktaking;
    }>(`/inventory/stocktaking/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete stocktaking.
 */
export function inventoryStocktakingDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/stocktaking/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find all product lines by stocktaking ID.
 */
export function inventoryStocktakingProductlineSearch(stocktakingId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductLine;
    }>(`/inventory/stocktaking/productline${QS.query(QS.form({
        stocktakingId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create product line. When creating several product lines, use /list for better performance.
 */
export function inventoryStocktakingProductlinePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProductLine;
    }>("/inventory/stocktaking/productline", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/inventory/stocktaking/productline/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product line.
 */
export function inventoryStocktakingProductlinePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductLine;
    }>(`/inventory/stocktaking/productline/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete product line.
 */
export function inventoryStocktakingProductlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/inventory/stocktaking/productline/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Create multiple invoices. Max 100 at a time.
 */
export function invoiceListPostList(body?: Blob, { sendToCustomer, fields }: {
    sendToCustomer?: boolean;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseInvoice;
    }>(`/invoice/list${QS.query(QS.form({
        sendToCustomer,
        fields
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find invoices corresponding with sent data. Includes charged outgoing invoices only.
 */
export function invoiceSearch(invoiceDateFrom: string, invoiceDateTo: string, { id, invoiceNumber, kid, voucherId, customerId, from, count, sorting, fields }: {
    id?: string;
    invoiceNumber?: string;
    kid?: string;
    voucherId?: string;
    customerId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseInvoice;
    }>(`/invoice${QS.query(QS.form({
        id,
        invoiceDateFrom,
        invoiceDateTo,
        invoiceNumber,
        kid,
        voucherId,
        customerId,
        from,
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
export function invoicePost(body?: Blob, { sendToCustomer, paymentTypeId, paidAmount }: {
    sendToCustomer?: boolean;
    paymentTypeId?: number;
    paidAmount?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperInvoice;
    }>(`/invoice${QS.query(QS.form({
        sendToCustomer,
        paymentTypeId,
        paidAmount
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Send invoice by ID and sendType. Optionally override email recipient.
 */
export function invoiceSendSend(id: number, sendType: "EMAIL" | "EHF" | "AVTALEGIRO" | "EFAKTURA" | "VIPPS" | "PAPER", { overrideEmailAddress }: {
    overrideEmailAddress?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/invoice/${id}/:send${QS.query(QS.form({
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
export function invoicePdfDownloadPdf(invoiceId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/invoice/${invoiceId}/pdf`, {
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
    }>(`/invoice/${id}/:payment${QS.query(QS.form({
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
export function invoiceCreateCreditNoteCreateCreditNote(id: number, date: string, { comment, creditNoteEmail }: {
    comment?: string;
    creditNoteEmail?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/invoice/${id}/:createCreditNote${QS.query(QS.form({
        date,
        comment,
        creditNoteEmail
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Create invoice reminder and sends it by the given dispatch type. Supports the reminder types SOFT_REMINDER, REMINDER and NOTICE_OF_DEBT_COLLECTION. DispatchType NETS_PRINT must have type NOTICE_OF_DEBT_COLLECTION. SMS and NETS_PRINT must be activated prior to usage in the API.
 */
export function invoiceCreateReminderCreateReminder(id: number, type: "SOFT_REMINDER" | "REMINDER" | "NOTICE_OF_DEBT_COLLECTION" | "DEBT_COLLECTION", date: string, dispatchType: "NETS_PRINT" | "EMAIL" | "SMS", { includeCharge, includeInterest, smsNumber }: {
    includeCharge?: boolean;
    includeInterest?: boolean;
    smsNumber?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/invoice/${id}/:createReminder${QS.query(QS.form({
        type,
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
 * Get invoice by ID.
 */
export function invoiceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/invoice/${id}${QS.query(QS.form({
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
    }>(`/invoice/paymentType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find payment type corresponding with sent data.
 */
export function invoicePaymentTypeSearch({ id, description, from, count, sorting, fields }: {
    id?: string;
    description?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentType;
    }>(`/invoice/paymentType${QS.query(QS.form({
        id,
        description,
        from,
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
    }>(`/invoice/details/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find ProjectInvoiceDetails corresponding with sent data.
 */
export function invoiceDetailsSearch(invoiceDateFrom: string, invoiceDateTo: string, { id, from, count, sorting, fields }: {
    id?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectInvoiceDetails;
    }>(`/invoice/details${QS.query(QS.form({
        id,
        invoiceDateFrom,
        invoiceDateTo,
        from,
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
export function ledgerOpenPostOpenPost(date: string, { accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, from, count, sorting, fields }: {
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLedgerAccount;
    }>(`/ledger/openPost${QS.query(QS.form({
        date,
        accountId,
        supplierId,
        customerId,
        employeeId,
        departmentId,
        projectId,
        productId,
        from,
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
export function ledgerSearch(dateFrom: string, dateTo: string, { openPostings, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, from, count, sorting, fields }: {
    openPostings?: string;
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseLedgerAccount;
    }>(`/ledger${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create several accounts.
 */
export function ledgerAccountListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseAccount;
    }>("/ledger/account/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple accounts.
 */
export function ledgerAccountListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccount;
    }>("/ledger/account/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete multiple accounts.
 */
export function ledgerAccountListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/account/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find accounts corresponding with sent data.
 */
export function ledgerAccountSearch({ id, number, isBankAccount, isInactive, isApplicableForSupplierInvoice, ledgerType, isBalanceAccount, from, count, sorting, fields }: {
    id?: string;
    "number"?: string;
    isBankAccount?: boolean;
    isInactive?: boolean;
    isApplicableForSupplierInvoice?: boolean;
    ledgerType?: "GENERAL" | "CUSTOMER" | "VENDOR" | "EMPLOYEE" | "ASSET";
    isBalanceAccount?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccount;
    }>(`/ledger/account${QS.query(QS.form({
        id,
        number,
        isBankAccount,
        isInactive,
        isApplicableForSupplierInvoice,
        ledgerType,
        isBalanceAccount,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a new account.
 */
export function ledgerAccountPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperAccount;
    }>("/ledger/account", {
        ...opts,
        method: "POST",
        body
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
    }>(`/ledger/account/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update account.
 */
export function ledgerAccountPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccount;
    }>(`/ledger/account/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete account.
 */
export function ledgerAccountDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/account/${id}`, {
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
    }>(`/ledger/accountingPeriod/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find accounting periods corresponding with sent data.
 */
export function ledgerAccountingPeriodSearch({ id, numberFrom, numberTo, startFrom, startTo, endFrom, endTo, count, from, sorting, fields }: {
    id?: string;
    numberFrom?: number;
    numberTo?: number;
    startFrom?: string;
    startTo?: string;
    endFrom?: string;
    endTo?: string;
    count?: number;
    "from"?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccountingPeriod;
    }>(`/ledger/accountingPeriod${QS.query(QS.form({
        id,
        numberFrom,
        numberTo,
        startFrom,
        startTo,
        endFrom,
        endTo,
        count,
        from,
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
    }>(`/ledger/annualAccount/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find annual accounts corresponding with sent data.
 */
export function ledgerAnnualAccountSearch({ id, yearFrom, yearTo, from, count, sorting, fields }: {
    id?: string;
    yearFrom?: number;
    yearTo?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAnnualAccount;
    }>(`/ledger/annualAccount${QS.query(QS.form({
        id,
        yearFrom,
        yearTo,
        from,
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
    }>(`/ledger/closeGroup/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find close groups corresponding with sent data.
 */
export function ledgerCloseGroupSearch(dateFrom: string, dateTo: string, { id, from, count, sorting, fields }: {
    id?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCloseGroup;
    }>(`/ledger/closeGroup${QS.query(QS.form({
        id,
        dateFrom,
        dateTo,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create multiple payment types for outgoing payments at once
 */
export function ledgerPaymentTypeOutListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponsePaymentTypeOut;
    }>("/ledger/paymentTypeOut/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple payment types for outgoing payments at once
 */
export function ledgerPaymentTypeOutListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentTypeOut;
    }>("/ledger/paymentTypeOut/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Gets payment types for outgoing payments
 */
export function ledgerPaymentTypeOutSearch({ id, description, isInactive, from, count, sorting, fields }: {
    id?: string;
    description?: string;
    isInactive?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePaymentTypeOut;
    }>(`/ledger/paymentTypeOut${QS.query(QS.form({
        id,
        description,
        isInactive,
        from,
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
export function ledgerPaymentTypeOutPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPaymentTypeOut;
    }>("/ledger/paymentTypeOut", {
        ...opts,
        method: "POST",
        body
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
    }>(`/ledger/paymentTypeOut/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update existing payment type for outgoing payments
 */
export function ledgerPaymentTypeOutPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPaymentTypeOut;
    }>(`/ledger/paymentTypeOut/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete payment type for outgoing payments by ID.
 */
export function ledgerPaymentTypeOutDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/paymentTypeOut/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find open posts corresponding with sent data.
 */
export function ledgerPostingOpenPostOpenPost(date: string, { accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, accountNumberFrom, accountNumberTo, from, count, sorting, fields }: {
    accountId?: number;
    supplierId?: number;
    customerId?: number;
    employeeId?: number;
    departmentId?: number;
    projectId?: number;
    productId?: number;
    accountNumberFrom?: number;
    accountNumberTo?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePosting;
    }>(`/ledger/posting/openPost${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
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
    }>(`/ledger/posting/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find postings corresponding with sent data.
 */
export function ledgerPostingSearch(dateFrom: string, dateTo: string, { openPostings, accountId, supplierId, customerId, employeeId, departmentId, projectId, productId, accountNumberFrom, accountNumberTo, type, from, count, sorting, fields }: {
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
    "type"?: "INCOMING_PAYMENT" | "INCOMING_PAYMENT_OPPOSITE" | "INVOICE_EXPENSE" | "OUTGOING_INVOICE_CUSTOMER_POSTING";
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePosting;
    }>(`/ledger/posting${QS.query(QS.form({
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
        type,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a new relative VAT Type. These are used if the company has 'forholdsmessig fradrag for inngående MVA'.
 */
export function ledgerVatTypeCreateRelativeVatTypeCreateRelativeVatType(name: string, vatTypeId: number, percentage: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVatType;
    }>(`/ledger/vatType/createRelativeVatType${QS.query(QS.form({
        name,
        vatTypeId,
        percentage
    }))}`, {
        ...opts,
        method: "PUT"
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
    }>(`/ledger/vatType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find vat types corresponding with sent data.
 */
export function ledgerVatTypeSearch({ id, number, typeOfVat, vatDate, from, count, sorting, fields }: {
    id?: string;
    "number"?: string;
    typeOfVat?: "OUTGOING" | "INCOMING";
    vatDate?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVatType;
    }>(`/ledger/vatType${QS.query(QS.form({
        id,
        number,
        typeOfVat,
        vatDate,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Upload a document to create one or more vouchers. Valid document formats are PDF, PNG, JPEG, TIFF and EHF. Send as multipart form.
 */
export function ledgerVoucherImportDocumentImportDocument(body: {
    file: Blob;
    description?: string;
}, { split }: {
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseVoucher;
    }>(`/ledger/voucher/importDocument${QS.query(QS.form({
        split
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * Find vouchers corresponding with sent data.
 */
export function ledgerVoucherSearch(dateFrom: string, dateTo: string, { id, number, numberFrom, numberTo, typeId, from, count, sorting, fields }: {
    id?: string;
    "number"?: string;
    numberFrom?: number;
    numberTo?: number;
    typeId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: VoucherSearchResponse;
    }>(`/ledger/voucher${QS.query(QS.form({
        id,
        number,
        numberFrom,
        numberTo,
        typeId,
        dateFrom,
        dateTo,
        from,
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
export function ledgerVoucherPost(body?: Blob, { sendToLedger }: {
    sendToLedger?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher${QS.query(QS.form({
        sendToLedger
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple vouchers. Postings with guiRow==0 will be deleted and regenerated.
 */
export function ledgerVoucherListPutList(body?: Blob, { sendToLedger }: {
    sendToLedger?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucher;
    }>(`/ledger/voucher/list${QS.query(QS.form({
        sendToLedger
    }))}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Get PDF representation of voucher by ID.
 */
export function ledgerVoucherPdfDownloadPdf(voucherId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/ledger/voucher/${voucherId}/pdf`, {
        ...opts
    });
}
/**
 * [BETA] Send voucher to ledger.
 */
export function ledgerVoucherSendToLedgerSendToLedger(id: number, { version, number }: {
    version?: number;
    "number"?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${id}/:sendToLedger${QS.query(QS.form({
        version,
        number
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Find non-posted vouchers.
 */
export function ledgerVoucherNonPostedNonPosted(includeNonApproved: boolean, { dateFrom, dateTo, changedSince, from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    changedSince?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucher;
    }>(`/ledger/voucher/>nonPosted${QS.query(QS.form({
        dateFrom,
        dateTo,
        includeNonApproved,
        changedSince,
        from,
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
export function ledgerVoucherVoucherReceptionVoucherReception({ dateFrom, dateTo, searchText, from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    searchText?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucher;
    }>(`/ledger/voucher/>voucherReception${QS.query(QS.form({
        dateFrom,
        dateTo,
        searchText,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find vouchers based on the external voucher number.
 */
export function ledgerVoucherExternalVoucherNumberExternalVoucherNumber({ externalVoucherNumber, from, count, sorting, fields }: {
    externalVoucherNumber?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucher;
    }>(`/ledger/voucher/>externalVoucherNumber${QS.query(QS.form({
        externalVoucherNumber,
        from,
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
    return oazapfts.fetchText(`/ledger/voucher/${voucherId}/pdf/${fileName}`, oazapfts.multipart({
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
    return oazapfts.fetchText(`/ledger/voucher/${voucherId}/attachment`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete attachment.
 */
export function ledgerVoucherAttachmentDeleteAttachment(voucherId: number, { version, sendToInbox, split }: {
    version?: number;
    sendToInbox?: boolean;
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/${voucherId}/attachment${QS.query(QS.form({
        version,
        sendToInbox,
        split
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Send voucher to inbox.
 */
export function ledgerVoucherSendToInboxSendToInbox(id: number, { version, comment }: {
    version?: number;
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${id}/:sendToInbox${QS.query(QS.form({
        version,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
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
 * Get voucher by ID.
 */
export function ledgerVoucherGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update voucher. Postings with guiRow==0 will be deleted and regenerated.
 */
export function ledgerVoucherPut(id: number, body?: Blob, { sendToLedger }: {
    sendToLedger?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucher;
    }>(`/ledger/voucher/${id}${QS.query(QS.form({
        sendToLedger
    }))}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete voucher by ID.
 */
export function ledgerVoucherDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/${id}`, {
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
    }>(`/ledger/voucher/${id}/:reverse${QS.query(QS.form({
        date
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Returns a data structure containing meta information about operations that are available for this voucher. Currently only implemented for DELETE: It is possible to check if the voucher is deletable.
 */
export function ledgerVoucherOptionsOptions(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherOptions;
    }>(`/ledger/voucher/${id}/options${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] API endpoint for creating historical vouchers. These are vouchers created outside Tripletex, and should be from closed accounting years. The intended usage is to get access to historical transcations in Tripletex. Also creates postings. All amount fields in postings will be used. VAT postings must be included, these are not generated automatically like they are for normal vouchers in Tripletex. Requires the \"All vouchers\" and \"Advanced Voucher\" permissions.
 */
export function ledgerVoucherHistoricalHistoricalPostHistorical(body?: Blob, { comment }: {
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseHistoricalVoucher;
    }>(`/ledger/voucher/historical/historical${QS.query(QS.form({
        comment
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
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
export function ledgerVoucherHistoricalClosePostingsClosePostings({ postingIds }: {
    postingIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/historical/:closePostings${QS.query(QS.form({
        postingIds
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Create one employee, based on import from external system. Validation is less strict, ie. employee department isn't required.
 */
export function ledgerVoucherHistoricalEmployeePostEmployee(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperEmployee;
    }>("/ledger/voucher/historical/employee", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Upload attachment to voucher. If the voucher already has an attachment the content will be appended to the existing attachment as new PDF page(s). Valid document formats are PDF, PNG, JPEG and TIFF. Non PDF formats will be converted to PDF. Send as multipart form.
 */
export function ledgerVoucherHistoricalAttachmentUploadAttachment(voucherId: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/ledger/voucher/historical/${voucherId}/attachment`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
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
    }>(`/ledger/voucherType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find voucher types corresponding with sent data.
 */
export function ledgerVoucherTypeSearch({ name, from, count, sorting, fields }: {
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherType;
    }>(`/ledger/voucherType${QS.query(QS.form({
        name,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get municipalities.
 */
export function municipalitySearch({ includePayrollTaxZones, from, count, sorting, fields }: {
    includePayrollTaxZones?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMunicipality;
    }>(`/municipality${QS.query(QS.form({
        includePayrollTaxZones,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create multiple Orders with OrderLines. Max 100 at a time.
 */
export function orderListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseOrder;
    }>("/order/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find orders corresponding with sent data.
 */
export function orderSearch(orderDateFrom: string, orderDateTo: string, { id, number, customerId, isClosed, isSubscription, from, count, sorting, fields }: {
    id?: string;
    "number"?: string;
    customerId?: string;
    isClosed?: boolean;
    isSubscription?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOrder;
    }>(`/order${QS.query(QS.form({
        id,
        number,
        customerId,
        orderDateFrom,
        orderDateTo,
        isClosed,
        isSubscription,
        from,
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
export function orderPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperOrder;
    }>("/order", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Create new invoice from order.
 */
export function orderInvoiceInvoice(id: number, invoiceDate: string, { sendToCustomer, paymentTypeId, paidAmount, paidAmountAccountCurrency, paymentTypeIdRestAmount, paidAmountAccountCurrencyRest, createOnAccount, amountOnAccount, onAccountComment, createBackorder }: {
    sendToCustomer?: boolean;
    paymentTypeId?: number;
    paidAmount?: number;
    paidAmountAccountCurrency?: number;
    paymentTypeIdRestAmount?: number;
    paidAmountAccountCurrencyRest?: number;
    createOnAccount?: "NONE" | "WITH_VAT" | "WITHOUT_VAT";
    amountOnAccount?: number;
    onAccountComment?: string;
    createBackorder?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/order/${id}/:invoice${QS.query(QS.form({
        invoiceDate,
        sendToCustomer,
        paymentTypeId,
        paidAmount,
        paidAmountAccountCurrency,
        paymentTypeIdRestAmount,
        paidAmountAccountCurrencyRest,
        createOnAccount,
        amountOnAccount,
        onAccountComment,
        createBackorder
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Charges a single customer invoice from multiple orders. The orders must be to the same customer, currency, due date, receiver email and attn.
 */
export function orderInvoiceMultipleOrdersInvoiceMultipleOrders(id: string, invoiceDate: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperInvoice;
    }>(`/order/:invoiceMultipleOrders${QS.query(QS.form({
        id,
        invoiceDate
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
    }>(`/order/${id}/:approveSubscriptionInvoice${QS.query(QS.form({
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
    return oazapfts.fetchText(`/order/${id}/:unApproveSubscriptionInvoice`, {
        ...opts,
        method: "PUT"
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
    }>(`/order/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update order.
 */
export function orderPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrder;
    }>(`/order/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
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
    }>(`/order/${id}/:attach`, oazapfts.multipart({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * [BETA] Find orderGroups corresponding with sent data.
 */
export function orderOrderGroupSearch({ ids, orderIds, from, count, sorting, fields }: {
    ids?: string;
    orderIds?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseOrderGroup;
    }>(`/order/orderGroup${QS.query(QS.form({
        ids,
        orderIds,
        from,
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
export function orderOrderGroupPost(body?: Blob, { orderLineIds }: {
    orderLineIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperOrderGroup;
    }>(`/order/orderGroup${QS.query(QS.form({
        orderLineIds
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [Beta] Put orderGroup.
 */
export function orderOrderGroupPut(body?: Blob, { orderLineIds, removeExistingOrderLines }: {
    orderLineIds?: string;
    removeExistingOrderLines?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderGroup;
    }>(`/order/orderGroup${QS.query(QS.form({
        OrderLineIds: orderLineIds,
        removeExistingOrderLines
    }))}`, {
        ...opts,
        method: "PUT",
        body
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
    }>(`/order/orderGroup/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [Beta] Delete orderGroup by ID.
 */
export function orderOrderGroupDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/order/orderGroup/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create multiple order lines.
 */
export function orderOrderlineListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseOrderLine;
    }>("/order/orderline/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Create order line. When creating several order lines, use /list for better performance.
 */
export function orderOrderlinePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperOrderLine;
    }>("/order/orderline", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/order/orderline/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Put order line
 */
export function orderOrderlinePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperOrderLine;
    }>(`/order/orderline/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete order line by ID.
 */
export function orderOrderlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/order/orderline/${id}`, {
        ...opts,
        method: "DELETE"
    });
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
    }>(`/product/external/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Wildcard search. The sorting-field is not in use on this endpoint.
 */
export function productExternalQueryQuery({ query, wholesaler, organizationNumber, elNumber, nrfNumber, isInactive, from, count, sorting, fields }: {
    query?: string;
    wholesaler?: "AHLSELL" | "BROEDRENE_DAHL" | "ELEKTROSKANDIA" | "HEIDENREICH" | "ONNINEN" | "SONEPAR" | "SOLAR" | "BERGAARD_AMUNDSEN" | "BERGAARD_AMUNDSEN_STAVANGER" | "SORLANDET_ELEKTRO" | "ETMAN_DISTRIBUSJON" | "ETM_OST" | "CENIKA" | "EP_ENGROS" | "BETEK" | "DGROUP" | "FAGERHULT" | "GLAMOX" | "SCHNEIDER" | "STOKKAN" | "WURTH" | "ELEKTROIMPORTOEREN" | "THERMOFLOOR" | "LYSKOMPONENTER" | "NORDESIGN";
    organizationNumber?: string;
    elNumber?: string;
    nrfNumber?: string;
    isInactive?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseExternalProduct;
    }>(`/product/external/query${QS.query(QS.form({
        query,
        wholesaler,
        organizationNumber,
        elNumber,
        nrfNumber,
        isInactive,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find external products corresponding with sent data. The sorting-field is not in use on this endpoint.
 */
export function productExternalSearch({ name, wholesaler, organizationNumber, elNumber, nrfNumber, isInactive, from, count, sorting, fields }: {
    name?: string;
    wholesaler?: "AHLSELL" | "BROEDRENE_DAHL" | "ELEKTROSKANDIA" | "HEIDENREICH" | "ONNINEN" | "SONEPAR" | "SOLAR" | "BERGAARD_AMUNDSEN" | "BERGAARD_AMUNDSEN_STAVANGER" | "SORLANDET_ELEKTRO" | "ETMAN_DISTRIBUSJON" | "ETM_OST" | "CENIKA" | "EP_ENGROS" | "BETEK" | "DGROUP" | "FAGERHULT" | "GLAMOX" | "SCHNEIDER" | "STOKKAN" | "WURTH" | "ELEKTROIMPORTOEREN" | "THERMOFLOOR" | "LYSKOMPONENTER" | "NORDESIGN";
    organizationNumber?: string;
    elNumber?: string;
    nrfNumber?: string;
    isInactive?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseExternalProduct;
    }>(`/product/external${QS.query(QS.form({
        name,
        wholesaler,
        organizationNumber,
        elNumber,
        nrfNumber,
        isInactive,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add multiple products.
 */
export function productListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProduct;
    }>("/product/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update a list of products.
 */
export function productListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProduct;
    }>("/product/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find products corresponding with sent data.
 */
export function productSearch({ number, productNumber, name, ean, isInactive, isStockItem, isSupplierProduct, supplierId, currencyId, vatTypeId, productUnitId, departmentId, accountId, costExcludingVatCurrencyFrom, costExcludingVatCurrencyTo, priceExcludingVatCurrencyFrom, priceExcludingVatCurrencyTo, priceIncludingVatCurrencyFrom, priceIncludingVatCurrencyTo, from, count, sorting, fields }: {
    "number"?: string;
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProduct;
    }>(`/product${QS.query(QS.form({
        number,
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
        from,
        count,
        sorting,
        fields
    }), QS.explode({
        productNumber
    }))}`, {
        ...opts
    });
}
/**
 * Create new product.
 */
export function productPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProduct;
    }>("/product", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Upload image to Product. Existing image on product will be replaced if exists
 */
export function productImageUploadImage(id: number, body: {
    file: Blob;
}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProduct;
    }>(`/product/${id}/image`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete image.
 */
export function productImageDeleteImage(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/${id}/image`, {
        ...opts,
        method: "DELETE"
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
    }>(`/product/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update product.
 */
export function productPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProduct;
    }>(`/product/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete product.
 */
export function productDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create list of new supplierProduct.
 */
export function productSupplierProductListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseSupplierProduct;
    }>("/product/supplierProduct/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update a list of supplierProduct.
 */
export function productSupplierProductListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierProduct;
    }>("/product/supplierProduct/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find products corresponding with sent data.
 */
export function productSupplierProductSearch({ productId, vendorId, query, isInactive, count, fields, from, sorting }: {
    productId?: number;
    vendorId?: number;
    query?: string;
    isInactive?: boolean;
    count?: number;
    fields?: string;
    "from"?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierProduct;
    }>(`/product/supplierProduct${QS.query(QS.form({
        productId,
        vendorId,
        query,
        isInactive,
        count,
        fields,
        from,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * Create new supplierProduct.
 */
export function productSupplierProductPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperSupplierProduct;
    }>("/product/supplierProduct", {
        ...opts,
        method: "POST",
        body
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
    }>(`/product/supplierProduct/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update supplierProduct.
 */
export function productSupplierProductPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierProduct;
    }>(`/product/supplierProduct/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete supplierProduct.
 */
export function productSupplierProductDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/supplierProduct/${id}`, {
        ...opts,
        method: "DELETE"
    });
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
    }>(`/product/discountGroup/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find discount groups corresponding with sent data.
 */
export function productDiscountGroupSearch({ id, name, number, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "number"?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDiscountGroup;
    }>(`/product/discountGroup${QS.query(QS.form({
        id,
        name,
        number,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add multiple product inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProductInventoryLocation;
    }>("/product/inventoryLocation/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple product inventory locations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductInventoryLocation;
    }>("/product/inventoryLocation/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Find inventory locations by product ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationSearch({ productId, inventoryId, isMainLocation, from, count, sorting, fields }: {
    productId?: string;
    inventoryId?: string;
    isMainLocation?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductInventoryLocation;
    }>(`/product/inventoryLocation${QS.query(QS.form({
        productId,
        inventoryId,
        isMainLocation,
        from,
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
export function productInventoryLocationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProductInventoryLocation;
    }>("/product/inventoryLocation", {
        ...opts,
        method: "POST",
        body
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
    }>(`/product/inventoryLocation/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductInventoryLocation;
    }>(`/product/inventoryLocation/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete product inventory location. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function productInventoryLocationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/inventoryLocation/${id}`, {
        ...opts,
        method: "DELETE"
    });
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
    }>(`/product/logisticsSettings${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update logistics settings of logged in company.
 */
export function productLogisticsSettingsPut(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperLogisticsSettings;
    }>("/product/logisticsSettings", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Add multiple products groups.
 */
export function productGroupListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProductGroup;
    }>("/product/group/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update a list of product groups.
 */
export function productGroupListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroup;
    }>("/product/group/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete multiple product groups.
 */
export function productGroupListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/group/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find product group with sent data
 */
export function productGroupSearch({ id, name, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroup;
    }>(`/product/group${QS.query(QS.form({
        id,
        name,
        from,
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
export function productGroupPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProductGroup;
    }>("/product/group", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/product/group/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product group.
 */
export function productGroupPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductGroup;
    }>(`/product/group/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete product group.
 */
export function productGroupDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/group/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Wildcard search.
 */
export function productGroupQueryQuery({ query, name, fields, from, count, sorting }: {
    query?: string;
    name?: string;
    fields?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroup;
    }>(`/product/group/query${QS.query(QS.form({
        query,
        name,
        fields,
        from,
        count,
        sorting
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Add multiple products group relations.
 */
export function productGroupRelationListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProductGroupRelation;
    }>("/product/groupRelation/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Delete multiple product group relations.
 */
export function productGroupRelationListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/groupRelation/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find product group relation with sent data.
 */
export function productGroupRelationSearch({ id, productId, productGroupId, from, count, sorting, fields }: {
    id?: string;
    productId?: string;
    productGroupId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductGroupRelation;
    }>(`/product/groupRelation${QS.query(QS.form({
        id,
        productId,
        productGroupId,
        from,
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
export function productGroupRelationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProductGroupRelation;
    }>("/product/groupRelation", {
        ...opts,
        method: "POST",
        body
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
    }>(`/product/groupRelation/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Delete product group relation.
 */
export function productGroupRelationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/groupRelation/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find prices for a product. Only available for users that have activated the Logistics/Logistics Plus Beta-program in 'Our customer account'.
 */
export function productProductPriceSearch(productId: string, { fromDate, toDate, showOnlyLastPrice, from, count, sorting, fields }: {
    fromDate?: string;
    toDate?: string;
    showOnlyLastPrice?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductPrice;
    }>(`/product/productPrice${QS.query(QS.form({
        productId,
        fromDate,
        toDate,
        showOnlyLastPrice,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create multiple product units.
 */
export function productUnitListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProductUnit;
    }>("/product/unit/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update list of product units.
 */
export function productUnitListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnit;
    }>("/product/unit/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find product units corresponding with sent data.
 */
export function productUnitSearch({ id, name, nameShort, commonCode, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    nameShort?: string;
    commonCode?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnit;
    }>(`/product/unit${QS.query(QS.form({
        id,
        name,
        nameShort,
        commonCode,
        from,
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
export function productUnitPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProductUnit;
    }>("/product/unit", {
        ...opts,
        method: "POST",
        body
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
    }>(`/product/unit/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update product unit.
 */
export function productUnitPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProductUnit;
    }>(`/product/unit/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete product unit by ID.
 */
export function productUnitDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/product/unit/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Wildcard search.
 */
export function productUnitQueryQuery({ query, count, fields, from, sorting }: {
    query?: string;
    count?: number;
    fields?: string;
    "from"?: number;
    sorting?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnit;
    }>(`/product/unit/query${QS.query(QS.form({
        query,
        count,
        fields,
        from,
        sorting
    }))}`, {
        ...opts
    });
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
    }>(`/product/unit/master/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find product units master corresponding with sent data.
 */
export function productUnitMasterSearch({ id, name, nameShort, commonCode, peppolName, peppolSymbol, isInactive, count, from, sorting, fields }: {
    id?: string;
    name?: string;
    nameShort?: string;
    commonCode?: string;
    peppolName?: string;
    peppolSymbol?: string;
    isInactive?: boolean;
    count?: number;
    "from"?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProductUnitMaster;
    }>(`/product/unit/master${QS.query(QS.form({
        id,
        name,
        nameShort,
        commonCode,
        peppolName,
        peppolSymbol,
        isInactive,
        count,
        from,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
 */
export function projectListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProject;
    }>("/project/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple projects.
 */
export function projectListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProject;
    }>("/project/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete projects.
 */
export function projectListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find projects corresponding with sent data.
 */
export function projectSearch({ id, name, number, isOffer, projectManagerId, employeeInProjectId, departmentId, startDateFrom, startDateTo, endDateFrom, endDateTo, isClosed, customerId, externalAccountsNumber, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "number"?: string;
    isOffer?: boolean;
    projectManagerId?: string;
    employeeInProjectId?: string;
    departmentId?: string;
    startDateFrom?: string;
    startDateTo?: string;
    endDateFrom?: string;
    endDateTo?: string;
    isClosed?: boolean;
    customerId?: string;
    externalAccountsNumber?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProject;
    }>(`/project${QS.query(QS.form({
        id,
        name,
        number,
        isOffer,
        projectManagerId,
        employeeInProjectId,
        departmentId,
        startDateFrom,
        startDateTo,
        endDateFrom,
        endDateTo,
        isClosed,
        customerId,
        externalAccountsNumber,
        from,
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
export function projectPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProject;
    }>("/project", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Delete multiple projects.
 */
export function projectDeleteList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/project", {
        ...opts,
        method: "DELETE",
        body
    });
}
/**
 * Find projects applicable for time sheet registration on a specific day.
 */
export function projectForTimeSheetGetForTimeSheet({ employeeId, date, from, count, sorting, fields }: {
    employeeId?: number;
    date?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProject;
    }>(`/project/>forTimeSheet${QS.query(QS.form({
        employeeId,
        date,
        from,
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
        status: 201;
        data: ListResponseProject;
    }>(`/project/import${QS.query(QS.form({
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
 * Find project by ID.
 */
export function projectGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProject;
    }>(`/project/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update project.
 */
export function projectPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProject;
    }>(`/project/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete project.
 */
export function projectDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find project categories corresponding with sent data.
 */
export function projectCategorySearch({ id, name, number, description, from, count, sorting, fields }: {
    id?: string;
    name?: string;
    "number"?: string;
    description?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectCategory;
    }>(`/project/category${QS.query(QS.form({
        id,
        name,
        number,
        description,
        from,
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
export function projectCategoryPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProjectCategory;
    }>("/project/category", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/project/category/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update project category.
 */
export function projectCategoryPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectCategory;
    }>(`/project/category/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Create multiple order lines.
 */
export function projectOrderlineListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProjectOrderLine;
    }>("/project/orderline/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find all order lines for project.
 */
export function projectOrderlineSearch(projectId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectOrderLine;
    }>(`/project/orderline${QS.query(QS.form({
        projectId,
        from,
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
export function projectOrderlinePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProjectOrderLine;
    }>("/project/orderline", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/project/orderline/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update project orderline.
 */
export function projectOrderlinePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectOrderLine;
    }>(`/project/orderline/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete order line by ID.
 */
export function projectOrderlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/orderline/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Add new project participant. Multiple project participants can be sent in the same request.
 */
export function projectParticipantListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProjectParticipant;
    }>("/project/participant/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Delete project participants.
 */
export function projectParticipantListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/participant/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Add new project participant.
 */
export function projectParticipantPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProjectParticipant;
    }>("/project/participant", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/project/participant/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update project participant.
 */
export function projectParticipantPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectParticipant;
    }>(`/project/participant/${id}`, {
        ...opts,
        method: "PUT",
        body
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
    }>(`/project/${id}/period/invoicingReserve${QS.query(QS.form({
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
    }>(`/project/${id}/period/invoiced${QS.query(QS.form({
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
    }>(`/project/${id}/period/overallStatus${QS.query(QS.form({
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
export function projectPeriodMonthlyStatusMonthlyStatus(dateFrom: string, dateTo: string, id: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectPeriodMonthlyStatus;
    }>(`/project/${id}/period/monthlyStatus${QS.query(QS.form({
        dateFrom,
        dateTo,
        from,
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
    }>(`/project/${id}/period/hourlistReport${QS.query(QS.form({
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
    }>(`/project/${id}/period/budgetStatus${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete project activities
 */
export function projectProjectActivityListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/projectActivity/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Add project activity.
 */
export function projectProjectActivityPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProjectActivity;
    }>("/project/projectActivity", {
        ...opts,
        method: "POST",
        body
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
    }>(`/project/projectActivity/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Delete project activity
 */
export function projectProjectActivityDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/projectActivity/${id}`, {
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
    }>(`/project/controlForm/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get project control forms by project ID.
 */
export function projectControlFormSearch(projectId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectControlForm;
    }>(`/project/controlForm${QS.query(QS.form({
        projectId,
        from,
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
    }>(`/project/controlFormType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get project control form types
 */
export function projectControlFormTypeSearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectControlFormType;
    }>(`/project/controlFormType${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Create multiple project hourly rates.
 */
export function projectHourlyRatesListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProjectHourlyRate;
    }>("/project/hourlyRates/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Update multiple project hourly rates.
 */
export function projectHourlyRatesListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRate;
    }>("/project/hourlyRates/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete project hourly rates.
 */
export function projectHourlyRatesListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find project hourly rates corresponding with sent data.
 */
export function projectHourlyRatesSearch({ id, projectId, type, startDateFrom, startDateTo, showInProjectOrder, from, count, sorting, fields }: {
    id?: string;
    projectId?: string;
    "type"?: "TYPE_PREDEFINED_HOURLY_RATES" | "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" | "TYPE_FIXED_HOURLY_RATE";
    startDateFrom?: string;
    startDateTo?: string;
    showInProjectOrder?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRate;
    }>(`/project/hourlyRates${QS.query(QS.form({
        id,
        projectId,
        type,
        startDateFrom,
        startDateTo,
        showInProjectOrder,
        from,
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
export function projectHourlyRatesPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProjectHourlyRate;
    }>("/project/hourlyRates", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Update or add the same project hourly rate from project overview.
 */
export function projectHourlyRatesUpdateOrAddHourRatesUpdateOrAddHourRates(ids: string, hourlyRate?: HourlyRate, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectHourlyRate;
    }>(`/project/hourlyRates/updateOrAddHourRates${QS.query(QS.form({
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
        data: ListResponseProject;
    }>(`/project/hourlyRates/deleteByProjectIds${QS.query(QS.form({
        ids,
        date
    }))}`, {
        ...opts,
        method: "DELETE"
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
    }>(`/project/hourlyRates/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a project hourly rate.
 */
export function projectHourlyRatesPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectHourlyRate;
    }>(`/project/hourlyRates/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete Project Hourly Rate
 */
export function projectHourlyRatesDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create multiple new project specific rates.
 */
export function projectHourlyRatesProjectSpecificRatesListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseProjectSpecificRate;
    }>("/project/hourlyRates/projectSpecificRates/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Update multiple project specific rates.
 */
export function projectHourlyRatesProjectSpecificRatesListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectSpecificRate;
    }>("/project/hourlyRates/projectSpecificRates/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete project specific rates.
 */
export function projectHourlyRatesProjectSpecificRatesListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/projectSpecificRates/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find project specific rates corresponding with sent data.
 */
export function projectHourlyRatesProjectSpecificRatesSearch({ id, projectHourlyRateId, employeeId, activityId, from, count, sorting, fields }: {
    id?: string;
    projectHourlyRateId?: string;
    employeeId?: string;
    activityId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProjectSpecificRate;
    }>(`/project/hourlyRates/projectSpecificRates${QS.query(QS.form({
        id,
        projectHourlyRateId,
        employeeId,
        activityId,
        from,
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
export function projectHourlyRatesProjectSpecificRatesPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperProjectSpecificRate;
    }>("/project/hourlyRates/projectSpecificRates", {
        ...opts,
        method: "POST",
        body
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
    }>(`/project/hourlyRates/projectSpecificRates/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update a project specific rate.
 */
export function projectHourlyRatesProjectSpecificRatesPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSpecificRate;
    }>(`/project/hourlyRates/projectSpecificRates/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete project specific rate
 */
export function projectHourlyRatesProjectSpecificRatesDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/project/hourlyRates/projectSpecificRates/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Get resource plan entries in the specified period.
 */
export function projectResourcePlanBudgetGet({ projectId, periodStart, periodEnd, periodType, fields }: {
    projectId?: number;
    periodStart?: string;
    periodEnd?: string;
    periodType?: "DAY" | "WEEK" | "MONTH";
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperResourcePlanBudget;
    }>(`/project/resourcePlanBudget${QS.query(QS.form({
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
    }>(`/project/settings${QS.query(QS.form({
        useNkode,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update project settings for company
 */
export function projectSettingsPut(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperProjectSettings;
    }>("/project/settings", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find all tasks for project.
 */
export function projectTaskSearch(projectId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTask;
    }>(`/project/task${QS.query(QS.form({
        projectId,
        from,
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
    }>(`/project/template/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find prospects corresponding with sent data.
 */
export function crmProspectSearch({ name, description, createdDateFrom, createdDateTo, customerId, salesEmployeeId, isClosed, closedReason, closedDateFrom, closedDateTo, competitor, prospectType, projectId, projectOfferId, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProspect;
    }>(`/crm/prospect${QS.query(QS.form({
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
        from,
        count,
        sorting,
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
    }>(`/crm/prospect/${id}${QS.query(QS.form({
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
    }>(`/pickupPoint/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Search pickup points.
 */
export function pickupPointSearch({ supplierId, transportTypeId, code, name, from, count, sorting, fields }: {
    supplierId?: number[];
    transportTypeId?: number[];
    code?: string;
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePickupPoint;
    }>(`/pickupPoint${QS.query(QS.explode({
        supplierId,
        transportTypeId
    }), QS.form({
        code,
        name,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find purchase orders with send data
 */
export function purchaseOrderSearch({ number, deliveryDateFrom, deliveryDateTo, creationDateFrom, creationDateTo, id, supplierId, projectId, isClosed, withDeviationOnly, from, count, sorting, fields }: {
    "number"?: string;
    deliveryDateFrom?: string;
    deliveryDateTo?: string;
    creationDateFrom?: string;
    creationDateTo?: string;
    id?: string;
    supplierId?: string;
    projectId?: string;
    isClosed?: boolean;
    withDeviationOnly?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrder;
    }>(`/purchaseOrder${QS.query(QS.form({
        number,
        deliveryDateFrom,
        deliveryDateTo,
        creationDateFrom,
        creationDateTo,
        id,
        supplierId,
        projectId,
        isClosed,
        withDeviationOnly,
        from,
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
export function purchaseOrderPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPurchaseOrder;
    }>("/purchaseOrder", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/purchaseOrder/${id}/:send${QS.query(QS.form({
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
        status: 201;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${id}/attachment${QS.query(QS.form({
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
    return oazapfts.fetchText(`/purchaseOrder/${id}/attachment`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Upload multiple attachments to Purchase Order.
 */
export function purchaseOrderAttachmentListUploadAttachments(id: number, formDataMultiPart: FormDataMultiPart, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${id}/attachment/list`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: formDataMultiPart
    }));
}
/**
 * [BETA] Send purchase order by customisable email.
 */
export function purchaseOrderSendByEmailSendByEmail(id: number, emailAddress: string, subject: string, { message }: {
    message?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${id}/:sendByEmail${QS.query(QS.form({
        emailAddress,
        subject,
        message
    }))}`, {
        ...opts,
        method: "PUT"
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
    }>(`/purchaseOrder/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Update purchase order.
 */
export function purchaseOrderPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 *  [BETA] Delete purchase order.
 */
export function purchaseOrderDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/${id}`, {
        ...opts,
        method: "DELETE"
    });
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
    }>(`/transportType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Search transport type.
 */
export function transportTypeSearch({ supplierId, name, from, count, sorting, fields }: {
    supplierId?: number[];
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTransportType;
    }>(`/transportType${QS.query(QS.explode({
        supplierId
    }), QS.form({
        name,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Register multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseDeviation;
    }>("/purchaseOrder/deviation/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeviation;
    }>("/purchaseOrder/deviation/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Find handled deviations for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationSearch(purchaseOrderId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseDeviation;
    }>(`/purchaseOrder/deviation${QS.query(QS.form({
        purchaseOrderId,
        from,
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
export function purchaseOrderDeviationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperDeviation;
    }>("/purchaseOrder/deviation", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Approve deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationApproveApprove(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrder;
    }>(`/purchaseOrder/deviation/${id}/:approve`, {
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
    }>(`/purchaseOrder/deviation/${id}/:deliver`, {
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
    }>(`/purchaseOrder/deviation/${id}/:undeliver`, {
        ...opts,
        method: "PUT"
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
    }>(`/purchaseOrder/deviation/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update deviation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperDeviation;
    }>(`/purchaseOrder/deviation/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderDeviationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/deviation/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Register multiple goods receipt without an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptListPostList(body?: Blob, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt/list${QS.query(QS.form({
        fields
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Delete multiple goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/goodsReceipt/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Get goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptSearch({ receivedDateFrom, receivedDateTo, status, withoutPurchase, from, count, sorting, fields }: {
    receivedDateFrom?: string;
    receivedDateTo?: string;
    status?: "STATUS_OPEN" | "STATUS_CONFIRMED";
    withoutPurchase?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt${QS.query(QS.form({
        receivedDateFrom,
        receivedDateTo,
        status,
        withoutPurchase,
        from,
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
export function purchaseOrderGoodsReceiptPost(body?: Blob, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt${QS.query(QS.form({
        fields
    }))}`, {
        ...opts,
        method: "POST",
        body
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
    }>(`/purchaseOrder/goodsReceipt/${id}/:receiveAndConfirm${QS.query(QS.form({
        receivedDate,
        inventoryId,
        fields
    }))}`, {
        ...opts,
        method: "PUT"
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
    }>(`/purchaseOrder/goodsReceipt/${id}/:registerGoodsReceipt${QS.query(QS.form({
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
    }>(`/purchaseOrder/goodsReceipt/${id}/:confirm${QS.query(QS.form({
        createRestOrder,
        fields
    }))}`, {
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
    }>(`/purchaseOrder/goodsReceipt/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptPut(id: number, body?: Blob, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceipt;
    }>(`/purchaseOrder/goodsReceipt/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/goodsReceipt/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Register multiple new goods receipt on an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseGoodsReceiptLine;
    }>("/purchaseOrder/goodsReceiptLine/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update goods receipt lines on a goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptLine;
    }>("/purchaseOrder/goodsReceiptLine/list", {
        ...opts,
        method: "PUT",
        body
    });
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
 * [BETA] Find goods receipt lines for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineSearch(purchaseOrderId: number, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseGoodsReceiptLine;
    }>(`/purchaseOrder/goodsReceiptLine${QS.query(QS.form({
        purchaseOrderId,
        from,
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
export function purchaseOrderGoodsReceiptLinePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperGoodsReceiptLine;
    }>("/purchaseOrder/goodsReceiptLine", {
        ...opts,
        method: "POST",
        body
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
    }>(`/purchaseOrder/goodsReceiptLine/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a goods receipt line on a goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLinePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperGoodsReceiptLine;
    }>(`/purchaseOrder/goodsReceiptLine/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete goods receipt line by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderGoodsReceiptLineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/goodsReceiptLine/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Create a new list of relations between purchase order and voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponsePurchaseOrderIncomingInvoiceRelation;
    }>("/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Delete multiple purchase order voucher relations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find purchase order relation to voucher with sent data. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationSearch({ id, orderOutId, voucherId, from, count, sorting, fields }: {
    id?: string;
    orderOutId?: string;
    voucherId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderIncomingInvoiceRelation;
    }>(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation${QS.query(QS.form({
        id,
        orderOutId,
        voucherId,
        from,
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
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPurchaseOrderIncomingInvoiceRelation;
    }>("/purchaseOrder/purchaseOrderIncomingInvoiceRelation", {
        ...opts,
        method: "POST",
        body
    });
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
    }>(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Delete purchase order voucher relation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 */
export function purchaseOrderPurchaseOrderIncomingInvoiceRelationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/purchaseOrderIncomingInvoiceRelation/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Create list of new purchase order lines.
 */
export function purchaseOrderOrderlineListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponsePurchaseOrderline;
    }>("/purchaseOrder/orderline/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update a list of purchase order lines.
 */
export function purchaseOrderOrderlineListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePurchaseOrderline;
    }>("/purchaseOrder/orderline/list", {
        ...opts,
        method: "PUT",
        body
    });
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
 *  [BETA] Creates purchase order line.
 */
export function purchaseOrderOrderlinePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPurchaseOrderline;
    }>("/purchaseOrder/orderline", {
        ...opts,
        method: "POST",
        body
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
    }>(`/purchaseOrder/orderline/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 *  [BETA] Updates purchase order line
 */
export function purchaseOrderOrderlinePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPurchaseOrderline;
    }>(`/purchaseOrder/orderline/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 *  [BETA] Delete purchase order line.
 */
export function purchaseOrderOrderlineDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/purchaseOrder/orderline/${id}`, {
        ...opts,
        method: "DELETE"
    });
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
    }>(`/reminder/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find reminders corresponding with sent data.
 */
export function reminderSearch(dateFrom: string, dateTo: string, { id, termOfPaymentTo, termOfPaymentFrom, invoiceId, customerId, from, count, sorting, fields }: {
    id?: string;
    termOfPaymentTo?: string;
    termOfPaymentFrom?: string;
    invoiceId?: number;
    customerId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseReminder;
    }>(`/reminder${QS.query(QS.form({
        id,
        dateFrom,
        dateTo,
        termOfPaymentTo,
        termOfPaymentFrom,
        invoiceId,
        customerId,
        from,
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
export function resultbudgetCompanyGetCompanyResultBudget({ year, from, count, sorting, fields }: {
    year?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudget;
    }>(`/resultbudget/company${QS.query(QS.form({
        year,
        from,
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
export function resultbudgetDepartmentGetDepartmentResultBudget(id: number, { year, from, count, sorting, fields }: {
    year?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudget;
    }>(`/resultbudget/department/${id}${QS.query(QS.form({
        year,
        from,
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
export function resultbudgetProjectGetProjectResultBudget(id: number, { year, from, count, sorting, fields }: {
    year?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudget;
    }>(`/resultbudget/project/${id}${QS.query(QS.form({
        year,
        from,
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
export function resultbudgetProductGetProductResultBudget(id: number, { year, from, count, sorting, fields }: {
    year?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudget;
    }>(`/resultbudget/product/${id}${QS.query(QS.form({
        year,
        from,
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
export function resultbudgetEmployeeGetEmployeeResultBudget(id: number, { year, from, count, sorting, fields }: {
    year?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseResultBudget;
    }>(`/resultbudget/employee/${id}${QS.query(QS.form({
        year,
        from,
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
        data: Blob;
    }>(`/saft/exportSAFT${QS.query(QS.form({
        year
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find salary type corresponding with sent data.
 */
export function salaryTypeSearch({ id, number, name, description, showInTimesheet, isInactive, employeeIds, from, count, sorting, fields }: {
    id?: string;
    "number"?: string;
    name?: string;
    description?: string;
    showInTimesheet?: boolean;
    isInactive?: boolean;
    employeeIds?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSalaryType;
    }>(`/salary/type${QS.query(QS.form({
        id,
        number,
        name,
        description,
        showInTimesheet,
        isInactive,
        employeeIds,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find salary type by ID.
 */
export function salaryTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryType;
    }>(`/salary/type/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find salary compilation (PDF document) by employee.
 */
export function salaryCompilationPdfDownloadPdf(employeeId: number, { year }: {
    year?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/salary/compilation/pdf${QS.query(QS.form({
        employeeId,
        year
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find salary compilation by employee.
 */
export function salaryCompilationGet(employeeId: number, { year, fields }: {
    year?: number;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryCompilation;
    }>(`/salary/compilation${QS.query(QS.form({
        employeeId,
        year,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find payslips corresponding with sent data.
 */
export function salaryPayslipSearch({ id, employeeId, wageTransactionId, activityId, yearFrom, yearTo, monthFrom, monthTo, voucherDateFrom, voucherDateTo, comment, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePayslip;
    }>(`/salary/payslip${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find payslip (PDF document) by ID.
 */
export function salaryPayslipPdfDownloadPdf(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/salary/payslip/${id}/pdf`, {
        ...opts
    });
}
/**
 * [BETA] Find payslip by ID.
 */
export function salaryPayslipGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPayslip;
    }>(`/salary/payslip/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get salary settings of logged in company.
 */
export function salarySettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalarySettings;
    }>(`/salary/settings${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update settings of logged in company.
 */
export function salarySettingsPut(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalarySettings;
    }>("/salary/settings", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Create multiple holiday settings of current logged in company.
 */
export function salarySettingsHolidayListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseCompanyHoliday;
    }>("/salary/settings/holiday/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] update multiple holiday settings of current logged in company.
 */
export function salarySettingsHolidayListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHoliday;
    }>("/salary/settings/holiday/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] delete multiple holiday settings of current logged in company.
 */
export function salarySettingsHolidayListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/settings/holiday/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find holiday settings of current logged in company.
 */
export function salarySettingsHolidaySearch({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHoliday;
    }>(`/salary/settings/holiday${QS.query(QS.form({
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a holiday setting of current logged in company.
 */
export function salarySettingsHolidayPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperCompanyHoliday;
    }>("/salary/settings/holiday", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] update a holiday setting of current logged in company.
 */
export function salarySettingsHolidayPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHoliday;
    }>(`/salary/settings/holiday/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Create multiple Pension Schemes.
 */
export function salarySettingsPensionSchemeListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponsePensionScheme;
    }>("/salary/settings/pensionScheme/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] update multiple Pension Schemes.
 */
export function salarySettingsPensionSchemeListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePensionScheme;
    }>("/salary/settings/pensionScheme/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] delete multiple Pension Schemes.
 */
export function salarySettingsPensionSchemeListDeleteByIds(ids: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/settings/pensionScheme/list${QS.query(QS.form({
        ids
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find pension schemes.
 */
export function salarySettingsPensionSchemeSearch({ number, from, count, sorting, fields }: {
    "number"?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePensionScheme;
    }>(`/salary/settings/pensionScheme${QS.query(QS.form({
        number,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create a Pension Scheme.
 */
export function salarySettingsPensionSchemePost(pensionScheme?: PensionScheme, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPensionScheme;
    }>("/salary/settings/pensionScheme", oazapfts.json({
        ...opts,
        method: "POST",
        body: pensionScheme
    }));
}
/**
 * [BETA] Get Pension Scheme for a specific ID
 */
export function salarySettingsPensionSchemeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPensionScheme;
    }>(`/salary/settings/pensionScheme/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a Pension Scheme
 */
export function salarySettingsPensionSchemePut(id: number, pensionScheme?: PensionScheme, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPensionScheme;
    }>(`/salary/settings/pensionScheme/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: pensionScheme
    }));
}
/**
 * [BETA] Delete a Pension Scheme
 */
export function salarySettingsPensionSchemeDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/settings/pensionScheme/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Create a new salary transaction.
 */
export function salaryTransactionPost(body?: Blob, { generateTaxDeduction }: {
    generateTaxDeduction?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperSalaryTransaction;
    }>(`/salary/transaction${QS.query(QS.form({
        generateTaxDeduction
    }))}`, {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find salary transaction by ID.
 */
export function salaryTransactionGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSalaryTransaction;
    }>(`/salary/transaction/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Delete salary transaction by ID.
 */
export function salaryTransactionDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/salary/transaction/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Create multiple suppliers. Related supplier addresses may also be created.
 */
export function supplierListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseSupplier;
    }>("/supplier/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Update multiple suppliers. Addresses can also be updated.
 */
export function supplierListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplier;
    }>("/supplier/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find suppliers corresponding with sent data.
 */
export function supplierSearch({ id, supplierNumber, organizationNumber, email, invoiceEmail, isInactive, accountManagerId, changedSince, isWholesaler, showProducts, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplier;
    }>(`/supplier${QS.query(QS.form({
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
        from,
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
export function supplierPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperSupplier;
    }>("/supplier", {
        ...opts,
        method: "POST",
        body
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
    }>(`/supplier/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update supplier.
 */
export function supplierPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplier;
    }>(`/supplier/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete supplier by ID
 */
export function supplierDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/supplier/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find supplierInvoices corresponding with sent data.
 */
export function supplierInvoiceSearch(invoiceDateFrom: string, invoiceDateTo: string, { id, invoiceNumber, kid, voucherId, supplierId, from, count, sorting, fields }: {
    id?: string;
    invoiceNumber?: string;
    kid?: string;
    voucherId?: string;
    supplierId?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoice;
    }>(`/supplierInvoice${QS.query(QS.form({
        id,
        invoiceDateFrom,
        invoiceDateTo,
        invoiceNumber,
        kid,
        voucherId,
        supplierId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Approve supplier invoice.
 */
export function supplierInvoiceApproveApprove(invoiceId: number, { comment }: {
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${invoiceId}/:approve${QS.query(QS.form({
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get supplierInvoice document by invoice ID.
 */
export function supplierInvoicePdfDownloadPdf(invoiceId: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchBlob<{
        status: 200;
        data: Blob;
    }>(`/supplierInvoice/${invoiceId}/pdf`, {
        ...opts
    });
}
/**
 * [BETA] Get supplierInvoices for approval
 */
export function supplierInvoiceForApprovalGetApprovalInvoices({ searchText, showAll, employeeId, from, count, sorting, fields }: {
    searchText?: string;
    showAll?: boolean;
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoice;
    }>(`/supplierInvoice/forApproval${QS.query(QS.form({
        searchText,
        showAll,
        employeeId,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Put debit postings.
 */
export function supplierInvoiceVoucherPostingsPutPostings(id: number, body?: Blob, { sendToLedger, voucherDate }: {
    sendToLedger?: boolean;
    voucherDate?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/voucher/${id}/postings${QS.query(QS.form({
        sendToLedger,
        voucherDate
    }))}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Approve supplier invoices.
 */
export function supplierInvoiceApproveApproveMany({ invoiceIds, comment }: {
    invoiceIds?: string;
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoice;
    }>(`/supplierInvoice/:approve${QS.query(QS.form({
        invoiceIds,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Add recipient.
 */
export function supplierInvoiceAddRecipientAddRecipientToMany(employeeId: number, { invoiceIds, comment }: {
    invoiceIds?: string;
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoice;
    }>(`/supplierInvoice/:addRecipient${QS.query(QS.form({
        employeeId,
        invoiceIds,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Add recipient to supplier invoices.
 */
export function supplierInvoiceAddRecipientAddRecipient(invoiceId: number, employeeId: number, { comment }: {
    comment?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${invoiceId}/:addRecipient${QS.query(QS.form({
        employeeId,
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] reject supplier invoices.
 */
export function supplierInvoiceRejectRejectMany(comment: string, { invoiceIds }: {
    invoiceIds?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseSupplierInvoice;
    }>(`/supplierInvoice/:reject${QS.query(QS.form({
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
    }>(`/supplierInvoice/${invoiceId}/:changeDimension${QS.query(QS.form({
        debitPostingIds,
        dimension,
        dimensionId
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Register payment, paymentType == 0 finds the last paymentType for this vendor
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
        status: 201;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${invoiceId}/:addPayment${QS.query(QS.form({
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
 * [BETA] reject supplier invoice.
 */
export function supplierInvoiceRejectReject(invoiceId: number, comment: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${invoiceId}/:reject${QS.query(QS.form({
        comment
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get supplierInvoice by ID.
 */
export function supplierInvoiceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperSupplierInvoice;
    }>(`/supplierInvoice/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get by ID.
 */
export function voucherApprovalListElementGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherApprovalListElement;
    }>(`/voucherApprovalListElement/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Search for company holidays by id or year.
 */
export function timesheetCompanyHolidaySearch({ ids, years, from, count, sorting, fields }: {
    ids?: string;
    years?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCompanyHolidays;
    }>(`/timesheet/companyHoliday${QS.query(QS.form({
        ids,
        years,
        from,
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
export function timesheetCompanyHolidayPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperCompanyHolidays;
    }>("/timesheet/companyHoliday", {
        ...opts,
        method: "POST",
        body
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
    }>(`/timesheet/companyHoliday/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update a company holiday
 */
export function timesheetCompanyHolidayPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCompanyHolidays;
    }>(`/timesheet/companyHoliday/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete a company holiday
 */
export function timesheetCompanyHolidayDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/companyHoliday/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Add new timesheet entry. Multiple objects for several users can be sent in the same request.
 */
export function timesheetEntryListPostList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ListResponseTimesheetEntry;
    }>("/timesheet/entry/list", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Update timesheet entry. Multiple objects for different users can be sent in the same request.
 */
export function timesheetEntryListPutList(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetEntry;
    }>("/timesheet/entry/list", {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Find timesheet entry corresponding with sent data.
 */
export function timesheetEntrySearch(dateFrom: string, dateTo: string, { id, employeeId, projectId, activityId, comment, from, count, sorting, fields }: {
    id?: string;
    employeeId?: string;
    projectId?: string;
    activityId?: string;
    comment?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: TimesheetEntrySearchResponse;
    }>(`/timesheet/entry${QS.query(QS.form({
        id,
        employeeId,
        projectId,
        activityId,
        dateFrom,
        dateTo,
        comment,
        from,
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
export function timesheetEntryPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperTimesheetEntry;
    }>("/timesheet/entry", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * Find projects with recent activities (timesheet entry registered).
 */
export function timesheetEntryRecentProjectsGetRecentProjects({ employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseProject;
    }>(`/timesheet/entry/>recentProjects${QS.query(QS.form({
        employeeId,
        from,
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
export function timesheetEntryRecentActivitiesGetRecentActivities(projectId: number, { employeeId, from, count, sorting, fields }: {
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseActivity;
    }>(`/timesheet/entry/>recentActivities${QS.query(QS.form({
        employeeId,
        projectId,
        from,
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
    }>(`/timesheet/entry/>totalHours${QS.query(QS.form({
        employeeId,
        startDate,
        endDate,
        fields
    }))}`, {
        ...opts
    });
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
    }>(`/timesheet/entry/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
 */
export function timesheetEntryPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimesheetEntry;
    }>(`/timesheet/entry/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * Delete timesheet entry by ID.
 */
export function timesheetEntryDelete(id: number, { version }: {
    version?: number;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/entry/${id}${QS.query(QS.form({
        version
    }))}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Find monthly status for given month.
 */
export function timesheetMonthByMonthNumberGetByMonthNumber(employeeIds: string, monthYear: string, { from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMonthlyStatus;
    }>(`/timesheet/month/byMonthNumber${QS.query(QS.form({
        employeeIds,
        monthYear,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
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
        data: ListResponseMonthlyStatus;
    }>(`/timesheet/month/:reopen${QS.query(QS.form({
        id,
        employeeIds,
        monthYear
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
        data: ListResponseMonthlyStatus;
    }>(`/timesheet/month/:unapprove${QS.query(QS.form({
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
        data: ListResponseMonthlyStatus;
    }>(`/timesheet/month/:approve${QS.query(QS.form({
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
 * Find monthly status entry by ID.
 */
export function timesheetMonthGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMonthlyStatus;
    }>(`/timesheet/month/${id}${QS.query(QS.form({
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
        data: ListResponseMonthlyStatus;
    }>(`/timesheet/month/:complete${QS.query(QS.form({
        id,
        employeeIds,
        monthYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get list of timesheet SalaryType Specifications
 */
export function timesheetSalaryTypeSpecificationSearch({ dateFrom, dateTo, employeeId, from, count, sorting, fields }: {
    dateFrom?: string;
    dateTo?: string;
    employeeId?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimesheetSalaryTypeSpecification;
    }>(`/timesheet/salaryTypeSpecification${QS.query(QS.form({
        dateFrom,
        dateTo,
        employeeId,
        from,
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
        status: 201;
        data: ResponseWrapperTimesheetSalaryTypeSpecification;
    }>("/timesheet/salaryTypeSpecification", oazapfts.json({
        ...opts,
        method: "POST",
        body: timesheetSalaryTypeSpecification
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
    }>(`/timesheet/salaryTypeSpecification/${id}${QS.query(QS.form({
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
    }>(`/timesheet/salaryTypeSpecification/${id}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: timesheetSalaryTypeSpecification
    }));
}
/**
 * [BETA] Delete a timesheet SalaryType Specification
 */
export function timesheetSalaryTypeSpecificationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/timesheet/salaryTypeSpecification/${id}`, {
        ...opts,
        method: "DELETE"
    });
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
    }>(`/timesheet/settings${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find time clock entries corresponding with sent data.
 */
export function timesheetTimeClockSearch({ id, employeeId, projectId, activityId, dateFrom, dateTo, hourId, isRunning, from, count, sorting, fields }: {
    id?: string;
    employeeId?: string;
    projectId?: string;
    activityId?: string;
    dateFrom?: string;
    dateTo?: string;
    hourId?: string;
    isRunning?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTimeClock;
    }>(`/timesheet/timeClock${QS.query(QS.form({
        id,
        employeeId,
        projectId,
        activityId,
        dateFrom,
        dateTo,
        hourId,
        isRunning,
        from,
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
    }>(`/timesheet/timeClock/present${QS.query(QS.form({
        employeeId,
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
    }>(`/timesheet/timeClock/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Update time clock by ID.
 */
export function timesheetTimeClockPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTimeClock;
    }>(`/timesheet/timeClock/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
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
    }>(`/timesheet/timeClock/:start${QS.query(QS.form({
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
    return oazapfts.fetchText(`/timesheet/timeClock/${id}/:stop${QS.query(QS.form({
        version
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
    }>(`/timesheet/week/:reopen${QS.query(QS.form({
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
    }>(`/timesheet/week/:unapprove${QS.query(QS.form({
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
    }>(`/timesheet/week/:approve${QS.query(QS.form({
        id,
        employeeId,
        weekYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * Find weekly status By ID, week/year combination, employeeId. or an approver
 */
export function timesheetWeekSearch({ ids, employeeIds, weekYear, approvedBy, from, count, sorting, fields }: {
    ids?: string;
    employeeIds?: string;
    weekYear?: string;
    approvedBy?: number;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseWeek;
    }>(`/timesheet/week${QS.query(QS.form({
        ids,
        employeeIds,
        weekYear,
        approvedBy,
        from,
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
    }>(`/timesheet/week/:complete${QS.query(QS.form({
        id,
        employeeId,
        weekYear
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Find accommodation allowances corresponding with sent data.
 */
export function travelExpenseAccommodationAllowanceSearch({ travelExpenseId, rateTypeId, rateCategoryId, rateFrom, rateTo, countFrom, countTo, amountFrom, amountTo, location, address, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseAccommodationAllowance;
    }>(`/travelExpense/accommodationAllowance${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create accommodation allowance.
 */
export function travelExpenseAccommodationAllowancePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperAccommodationAllowance;
    }>("/travelExpense/accommodationAllowance", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get travel accommodation allowance by ID.
 */
export function travelExpenseAccommodationAllowanceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccommodationAllowance;
    }>(`/travelExpense/accommodationAllowance/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update accommodation allowance.
 */
export function travelExpenseAccommodationAllowancePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperAccommodationAllowance;
    }>(`/travelExpense/accommodationAllowance/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete accommodation allowance.
 */
export function travelExpenseAccommodationAllowanceDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/accommodationAllowance/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find costs corresponding with sent data.
 */
export function travelExpenseCostSearch({ travelExpenseId, vatTypeId, currencyId, rateFrom, rateTo, countFrom, countTo, amountFrom, amountTo, location, address, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseCost;
    }>(`/travelExpense/cost${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create cost.
 */
export function travelExpenseCostPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperCost;
    }>("/travelExpense/cost", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get cost by ID.
 */
export function travelExpenseCostGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCost;
    }>(`/travelExpense/cost/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update cost.
 */
export function travelExpenseCostPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperCost;
    }>(`/travelExpense/cost/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete cost.
 */
export function travelExpenseCostDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/cost/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find mileage allowances corresponding with sent data.
 */
export function travelExpenseMileageAllowanceSearch({ travelExpenseId, rateTypeId, rateCategoryId, kmFrom, kmTo, rateFrom, rateTo, amountFrom, amountTo, departureLocation, destination, dateFrom, dateTo, isCompanyCar, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseMileageAllowance;
    }>(`/travelExpense/mileageAllowance${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create mileage allowance.
 */
export function travelExpenseMileageAllowancePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperMileageAllowance;
    }>("/travelExpense/mileageAllowance", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get mileage allowance by ID.
 */
export function travelExpenseMileageAllowanceGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMileageAllowance;
    }>(`/travelExpense/mileageAllowance/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update mileage allowance.
 */
export function travelExpenseMileageAllowancePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperMileageAllowance;
    }>(`/travelExpense/mileageAllowance/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete mileage allowance.
 */
export function travelExpenseMileageAllowanceDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/mileageAllowance/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find passengers corresponding with sent data.
 */
export function travelExpensePassengerSearch({ mileageAllowance, name, from, count, sorting, fields }: {
    mileageAllowance?: string;
    name?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePassenger;
    }>(`/travelExpense/passenger${QS.query(QS.form({
        mileageAllowance,
        name,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create passenger.
 */
export function travelExpensePassengerPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPassenger;
    }>("/travelExpense/passenger", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get passenger by ID.
 */
export function travelExpensePassengerGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPassenger;
    }>(`/travelExpense/passenger/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update passenger.
 */
export function travelExpensePassengerPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPassenger;
    }>(`/travelExpense/passenger/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete passenger.
 */
export function travelExpensePassengerDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/passenger/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find per diem compensations corresponding with sent data.
 */
export function travelExpensePerDiemCompensationSearch({ travelExpenseId, rateTypeId, rateCategoryId, overnightAccommodation, countFrom, countTo, rateFrom, rateTo, amountFrom, amountTo, location, address, isDeductionForBreakfast, isLunchDeduction, isDinnerDeduction, from, count, sorting, fields }: {
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponsePerDiemCompensation;
    }>(`/travelExpense/perDiemCompensation${QS.query(QS.form({
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create per diem compensation.
 */
export function travelExpensePerDiemCompensationPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperPerDiemCompensation;
    }>("/travelExpense/perDiemCompensation", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get per diem compensation by ID.
 */
export function travelExpensePerDiemCompensationGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPerDiemCompensation;
    }>(`/travelExpense/perDiemCompensation/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update per diem compensation.
 */
export function travelExpensePerDiemCompensationPut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperPerDiemCompensation;
    }>(`/travelExpense/perDiemCompensation/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete per diem compensation.
 */
export function travelExpensePerDiemCompensationDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/perDiemCompensation/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Find travel expenses corresponding with sent data.
 */
export function travelExpenseSearch({ employeeId, departmentId, projectId, projectManagerId, departureDateFrom, returnDateTo, state, from, count, sorting, fields }: {
    employeeId?: string;
    departmentId?: string;
    projectId?: string;
    projectManagerId?: string;
    departureDateFrom?: string;
    returnDateTo?: string;
    state?: "ALL" | "OPEN" | "APPROVED" | "SALARY_PAID" | "DELIVERED";
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpense;
    }>(`/travelExpense${QS.query(QS.form({
        employeeId,
        departmentId,
        projectId,
        projectManagerId,
        departureDateFrom,
        returnDateTo,
        state,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Create travel expense.
 */
export function travelExpensePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperTravelExpense;
    }>("/travelExpense", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Unapprove travel expenses.
 */
export function travelExpenseUnapproveUnapprove({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpense;
    }>(`/travelExpense/:unapprove${QS.query(QS.form({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Approve travel expenses.
 */
export function travelExpenseApproveApprove({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpense;
    }>(`/travelExpense/:approve${QS.query(QS.form({
        id
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
        data: Blob;
    }>(`/travelExpense/${travelExpenseId}/attachment`, {
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
    return oazapfts.fetchText(`/travelExpense/${travelExpenseId}/attachment${QS.query(QS.form({
        createNewCost
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
/**
 * [BETA] Delete attachment.
 */
export function travelExpenseAttachmentDeleteAttachment(travelExpenseId: number, { version, sendToInbox, split }: {
    version?: number;
    sendToInbox?: boolean;
    split?: boolean;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/${travelExpenseId}/attachment${QS.query(QS.form({
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
    return oazapfts.fetchText(`/travelExpense/${travelExpenseId}/attachment/list${QS.query(QS.form({
        createNewCost
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: formDataMultiPart
    }));
}
/**
 * [BETA] Deliver travel expenses.
 */
export function travelExpenseDeliverDeliver({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpense;
    }>(`/travelExpense/:deliver${QS.query(QS.form({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Undeliver travel expenses.
 */
export function travelExpenseUndeliverUndeliver({ id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpense;
    }>(`/travelExpense/:undeliver${QS.query(QS.form({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Create vouchers
 */
export function travelExpenseCreateVouchersCreateVouchers(date: string, { id }: {
    id?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpense;
    }>(`/travelExpense/:createVouchers${QS.query(QS.form({
        id,
        date
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Get travel expense by ID.
 */
export function travelExpenseGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>(`/travelExpense/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Update travel expense.
 */
export function travelExpensePut(id: number, body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>(`/travelExpense/${id}`, {
        ...opts,
        method: "PUT",
        body
    });
}
/**
 * [BETA] Delete travel expense.
 */
export function travelExpenseDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/travelExpense/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * [BETA] Copy travel expense.
 */
export function travelExpenseCopyCopy(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpense;
    }>(`/travelExpense/:copy${QS.query(QS.form({
        id
    }))}`, {
        ...opts,
        method: "PUT"
    });
}
/**
 * [BETA] Find rates corresponding with sent data.
 */
export function travelExpenseRateSearch({ rateCategoryId, type, isValidDayTrip, isValidAccommodation, isValidDomestic, isValidForeignTravel, requiresZone, requiresOvernightAccommodation, dateFrom, dateTo, from, count, sorting, fields }: {
    rateCategoryId?: string;
    "type"?: "PER_DIEM" | "ACCOMMODATION_ALLOWANCE" | "MILEAGE_ALLOWANCE";
    isValidDayTrip?: boolean;
    isValidAccommodation?: boolean;
    isValidDomestic?: boolean;
    isValidForeignTravel?: boolean;
    requiresZone?: boolean;
    requiresOvernightAccommodation?: boolean;
    dateFrom?: string;
    dateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRate;
    }>(`/travelExpense/rate${QS.query(QS.form({
        rateCategoryId,
        type,
        isValidDayTrip,
        isValidAccommodation,
        isValidDomestic,
        isValidForeignTravel,
        requiresZone,
        requiresOvernightAccommodation,
        dateFrom,
        dateTo,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get travel expense rate by ID.
 */
export function travelExpenseRateGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseRate;
    }>(`/travelExpense/rate/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find rate categories corresponding with sent data.
 */
export function travelExpenseRateCategorySearch({ type, name, travelReportRateCategoryGroupId, ameldingWageCode, wageCodeNumber, isValidDayTrip, isValidAccommodation, isValidDomestic, requiresZone, isRequiresOvernightAccommodation, dateFrom, dateTo, from, count, sorting, fields }: {
    "type"?: "PER_DIEM" | "ACCOMMODATION_ALLOWANCE" | "MILEAGE_ALLOWANCE";
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
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRateCategory;
    }>(`/travelExpense/rateCategory${QS.query(QS.form({
        type,
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
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get travel expense rate category by ID.
 */
export function travelExpenseRateCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseRateCategory;
    }>(`/travelExpense/rateCategory/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find rate categoriy groups corresponding with sent data.
 */
export function travelExpenseRateCategoryGroupSearch({ name, isForeignTravel, dateFrom, dateTo, from, count, sorting, fields }: {
    name?: string;
    isForeignTravel?: boolean;
    dateFrom?: string;
    dateTo?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseRateCategoryGroup;
    }>(`/travelExpense/rateCategoryGroup${QS.query(QS.form({
        name,
        isForeignTravel,
        dateFrom,
        dateTo,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get travel report rate category group by ID.
 */
export function travelExpenseRateCategoryGroupGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseRateCategoryGroup;
    }>(`/travelExpense/rateCategoryGroup/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get cost category by ID.
 */
export function travelExpenseCostCategoryGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelCostCategory;
    }>(`/travelExpense/costCategory/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find cost category corresponding with sent data.
 */
export function travelExpenseCostCategorySearch({ id, description, isInactive, showOnEmployeeExpenses, from, count, sorting, fields }: {
    id?: string;
    description?: string;
    isInactive?: boolean;
    showOnEmployeeExpenses?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelCostCategory;
    }>(`/travelExpense/costCategory${QS.query(QS.form({
        id,
        description,
        isInactive,
        showOnEmployeeExpenses,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get payment type by ID.
 */
export function travelExpensePaymentTypeGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelPaymentType;
    }>(`/travelExpense/paymentType/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Find payment type corresponding with sent data.
 */
export function travelExpensePaymentTypeSearch({ id, description, isInactive, showOnEmployeeExpenses, from, count, sorting, fields }: {
    id?: string;
    description?: string;
    isInactive?: boolean;
    showOnEmployeeExpenses?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelPaymentType;
    }>(`/travelExpense/paymentType${QS.query(QS.form({
        id,
        description,
        isInactive,
        showOnEmployeeExpenses,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Get travel expense settings of logged in company.
 */
export function travelExpenseSettingsGet({ fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperTravelExpenseSettings;
    }>(`/travelExpense/settings${QS.query(QS.form({
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
    }>(`/travelExpense/zone/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Find travel expense zones corresponding with sent data.
 */
export function travelExpenseZoneSearch({ id, code, isDisabled, from, count, sorting, fields }: {
    id?: string;
    code?: string;
    isDisabled?: boolean;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseTravelExpenseZone;
    }>(`/travelExpense/zone${QS.query(QS.form({
        id,
        code,
        isDisabled,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * Upload multiple attachments to travel expense.
 */
export function vatReturnsAttachmentListUploadAttachments(id: number, formDataMultiPart: FormDataMultiPart, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/vatReturns/${id}/attachment/list`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: formDataMultiPart
    }));
}
/**
 * [BETA] - Get all structured comments available
 */
export function vatReturnsCommentAllAll({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVatReturnsComment;
    }>(`/vatReturns/comment/>all${QS.query(QS.form({
        from,
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
export function vatReturnsCommentQuery({ from, count, sorting, fields }: {
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVatReturnsVatCodeCommentDto;
    }>(`/vatReturns/comment${QS.query(QS.form({
        from,
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
export function voucherMessageSearch({ voucherIds, from, count, sorting, fields }: {
    voucherIds?: string;
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherMessage;
    }>(`/voucherMessage${QS.query(QS.form({
        voucherIds,
        from,
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
export function voucherMessagePost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperVoucherMessage;
    }>("/voucherMessage", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Find voucherStatus corresponding with sent data. The voucherStatus is used to coordinate integration processes. Requires setup done by Tripletex, currently supports debt collection.
 */
export function voucherStatusSearch({ ids, voucherIds, status, type, from, count, sorting, fields }: {
    ids?: string;
    voucherIds?: string;
    status?: "WAITING" | "DONE" | "SKIPPED" | "ERROR" | "NONE" | "PROCESSING" | "RECLAIMED";
    "type"?: "TRIPLETEX" | "SUPPLIERINVOICE_EXTERNAL" | "DEBT_COLLECTION";
    "from"?: number;
    count?: number;
    sorting?: string;
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListResponseVoucherStatus;
    }>(`/voucherStatus${QS.query(QS.form({
        ids,
        voucherIds,
        status,
        type,
        from,
        count,
        sorting,
        fields
    }))}`, {
        ...opts
    });
}
/**
 * [BETA] Post new voucherStatus.
 */
export function voucherStatusPost(body?: Blob, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: ResponseWrapperVoucherStatus;
    }>("/voucherStatus", {
        ...opts,
        method: "POST",
        body
    });
}
/**
 * [BETA] Get voucherStatus by ID.
 */
export function voucherStatusGet(id: number, { fields }: {
    fields?: string;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ResponseWrapperVoucherStatus;
    }>(`/voucherStatus/${id}${QS.query(QS.form({
        fields
    }))}`, {
        ...opts
    });
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
    }>(`/internal/favorites${QS.query(QS.form({
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
        status: 201;
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
    return oazapfts.fetchText(`/internal/favorites/${id}`, oazapfts.form({
        ...opts,
        method: "PUT",
        body
    }));
}
/**
 * Delete a favorite
 */
export function internalFavoritesDelete(id: number, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/internal/favorites/${id}`, {
        ...opts,
        method: "DELETE"
    });
}
