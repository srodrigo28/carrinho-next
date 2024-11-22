export default function Login(){
    return(
        <div className="h-screen w-full flex">
            <img className="flex-1" src="https://hypescience.com/wp-content/uploads/2016/05/espaco-tres-dimensoes-3d.jpg" alt="" />
            <form className="h-96 absolute rounded-lg flex-col flex gap-5 top-20 left-[35%] opacity-50 bg-slate-900 p-10">
                <h1 className="text-white text-3xl">Nossa Conta</h1>
                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}