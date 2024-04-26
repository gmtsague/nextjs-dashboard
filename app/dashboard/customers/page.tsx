import { KeyIcon } from "@heroicons/react/24/outline";
//import clsx from 'clsx';

/*export*/ type State = {
  errors?: any/*{
    customerId?: string[];
    amount?: string[];
    status?: string[];
  }*/;
  message?: string | null;
};

export function CustomInput({
  inputType, 
  inputId, 
  inputName, 
  labelValue, 
  defaultValue,
  placeHolderValue, 
  isRequired=false, 
  children,
state}:Readonly<{  
    inputType:string, 
    inputId?:string, 
    inputName:string, 
    labelValue:string, 
    defaultValue?: (string | number /*| Date*/),
    placeHolderValue?:string, 
    isRequired?:boolean, 
    children?:React.ReactNode,
  state?: State }>) {

const requiredAttribute = (isRequired?'required': '');

    return (
      <div className="mt-4">
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor={inputId}
        >
          {labelValue}
        </label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id={inputId}
            type={inputType}
            name={inputName}
            placeholder={placeHolderValue}
            value={defaultValue}
            required={isRequired}
            //minLength={6}
            aria-describedby="customer-error"

          />
          {children}
          {/* <{iconKey} className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
        </div>
        {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
            {`state?.errors?.${inputName}` &&
             `state?.errors.${inputName}`.map((custerror: string) => (
                <p className="mt-2 text-sm text-red-500" key={custerror}>
                {custerror}
                </p>
            ))}
        </div> */}
      </div>
    );
  }

  export default function Page() {
    return (
      <div>
    <p>Customers Page</p>
    <form>
    <CustomInput inputType="text" inputName="fullname" labelValue="Nom complet" inputId="fullnameID" placeHolderValue="Saisir votre nom complet" />
    <CustomInput inputType="email" inputName="emailpro" labelValue="Email professionnelle" inputId="emailID" placeHolderValue="Saisir votre email prof." />
    <CustomInput inputType="date" inputName="datenais" labelValue="Date de naissance" inputId="datenaisID" placeHolderValue="Saisir votre date de naissance" />
    <CustomInput inputType="number" inputName="expProf" labelValue="Années d'Expérience Prof." inputId="expProfID" placeHolderValue="Saisir le nombre d'années d'expérience Prof." isRequired={true}>
      <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </CustomInput> 

    <button type="submit" className="mt-10 flex h-10 items-center  rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 "> Submit</button>
    </form>
    </div>
    );
  }