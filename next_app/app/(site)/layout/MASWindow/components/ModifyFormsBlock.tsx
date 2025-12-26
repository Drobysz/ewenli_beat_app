import { AccountDataForm } from "@/components/index";

export const ModifyFormsBlock = ()=> {
	return (
		<div className="flex flex-col gap-10 h-fit">
			<AccountDataForm formType="email"/>
			<AccountDataForm formType="name"/>
			<AccountDataForm formType="password"/>
		</div>
	)
}