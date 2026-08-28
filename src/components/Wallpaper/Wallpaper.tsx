import { useContext } from "../../context/context";

const wallpaperSources: Record<string, string> = {
    aeroglobe: "/assets/wallpapers/aeroglobe.jpg",
    bliss: "/assets/wallpapers/wallpaper__bliss.jpg",
    autumn: "/assets/wallpapers/wallpaper__autumn.jpg",
    red_moon_desert: "/assets/wallpapers/wallpaper__red_moon_desert.jpg",
    friend: "/assets/wallpapers/wallpaper__friend.jpg",
    follow: "/assets/wallpapers/wallpaper__follow.jpg",
};

const Wallpaper = () => {
    const { wallpaper } = useContext();
    const wallpaperSource = wallpaperSources[wallpaper] ?? wallpaperSources.aeroglobe;

    return <img src={wallpaperSource} width="100%" height="100%" className="fixed inset-0 object-cover object-center h-full" draggable={false} alt="" />;
};

export default Wallpaper;