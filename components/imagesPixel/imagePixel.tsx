import PixelTransition from "@/components/imagesPixel/PixelTransition";

export default function ImagePixel() {
    return (
        <div className="w-full h-full">
            <PixelTransition
                firstContent={
                    <img
                        src="https://res.cloudinary.com/dibpc6jxc/image/upload/v1758030246/barberpro_avatars/yocrstjnb8wqqlmtbxog.jpg"
                        alt="Profile picture"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            margin: 0,
                            padding: 0
                        }}
                    />
                }
                secondContent={
                        <img
                            src="/images/Avatar_Notion.jpg"
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                }
                gridSize={6}
                pixelColor='#ffffffff'
                animationStepDuration={0.4}
                
            />
        </div>
    );
};