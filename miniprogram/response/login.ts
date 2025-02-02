export interface ILoginResponse {
	id: string,
	username: string
	phone: string,
	roleId: number,
	userIcon: string,
	points: number
}

export interface ISubmitLogin{
	username:string,
	avatarUrl:string
}