import styles from "./Bios.module.scss";

const Bios = () => {    
    return (
        <div className={`${styles.bios} flex flex-col items-center relative z-10 bg-black w-full h-full`}>
            {(<div className="w-full h-full p-12">
                <div className="flex flex-col justify-center items-center h-7/8">
                    <img width="200" className="mb-10" src="/assets/bios__primary_logo.png" />
                    <img width="150" src="/assets/bios__loading_bar.gif" />
                </div>
                <div className="flex justify-center h-1/8">
                    <div className={`${styles.meta} flex flex-wrap items-end w-full gap-x-20`}>
                        <img width="200" src="/assets/bios__copyright.png" />
                        <img width="75" className="mb-0.5" src="/assets/bios__secondary_logo.png" />
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Bios;
