import ListItemLink from "../Elements/ListItemLink";
const NavbarKedungloBikingShop = () => {
    return (
        <nav className="min-w-full min-h-[65px] bg-gradient-to-r from-gradient-primary via-gradient-secondary to-gradient-secondary flex justify-between items-center px-[60px]">
                <h1 className="capitalize font-semibold text-slate-100 text-xl font-inter">kedunglo biking shop</h1>
                <ul className="flex justify-evenly items-center gap-12 font-inter capitalize text-slate-100 font-normal">
                    <ListItemLink>home</ListItemLink>
                    <ListItemLink>last rute</ListItemLink>
                    <ListItemLink>history</ListItemLink>
                    <ListItemLink>rating us</ListItemLink>
                </ul>
            </nav>
    )
}
export default NavbarKedungloBikingShop;