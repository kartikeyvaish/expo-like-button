type LikeButtonProps = {
    // Basic Props
    liked?: boolean | undefined;
    onPress?: () => void;
    iconSize?: number;
    scale?: number;

    // Liked Component Props
    customLikedComponent?: React.ReactNode;
    likedColor?: string;
    likedIconName?: string | any;

    // Unlike Component Props
    customUnlikedComponent?: React.ReactNode;
    unlikedColor?: string;
    unlikedIconName?: string | any;

    // Any Extra Props
    [key: string]: any;
};



export type { LikeButtonProps };