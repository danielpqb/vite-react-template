export type AnimationStates = {
  addAnimation: (params: Animations) => void;
  changeAnimationState: (id: string, isAnimating: boolean) => void;
  animations: { [id: string]: Animations };
};

export type Animations = {
  id: string;
  animate: Animate;
  isAnimating?: boolean;
};

type Animate = ({ name, duration }: { name: AnimationNames; duration?: number }) => void;

/*
Check website to test animations:
https://animate.style/
*/
type AnimationNames =
  //Attention seekers
  | "bounce"
  | "flash"
  | "pulse"
  | "rubberBand"
  | "shakeX"
  | "shakeY"
  | "headShake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartBeat"

  //Back entrances
  | "backInDown"
  | "backInLeft"
  | "backInRight"
  | "backInUp"

  //Back exits
  | "backOutDown"
  | "backOutLeft"
  | "backOutRight"
  | "backOutUp"

  //Bouncings entrances
  | "bounceIn"
  | "bounceInDown"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceInUp"

  //Bouncings exits
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "bounceOutUp"

  //Fading entrances
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInTopLeft"
  | "fadeInTopRight"
  | "fadeInBottomLeft"
  | "fadeInBottomRight"

  //Fading exits
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutTopLeft"
  | "fadeOutTopRight"
  | "fadeOutBottomRight"
  | "fadeOutBottomLeft"

  //Flippers
  | "flip"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"

  //Lightspeed
  | "lightSpeedInRight"
  | "lightSpeedInLeft"
  | "lightSpeedOutRight"
  | "lightSpeedOutLeft"

  //Rotating entrances
  | "rotateIn"
  | "rotateInDownLeft"
  | "rotateInDownRight"
  | "rotateInUpLeft"
  | "rotateInUpRight"

  //Rotating exits
  | "rotateOut"
  | "rotateOutDownLeft"
  | "rotateOutDownRight"
  | "rotateOutUpLeft"
  | "rotateOutUpRight"

  //Specials
  | "hinge"
  | "jackInTheBox"
  | "rollIn"
  | "rollOut"

  //Zooming entrances
  | "zoomIn"
  | "zoomInDown"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomInUp"

  //Zooming exits
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutLeft"
  | "zoomOutRight"
  | "zoomOutUp"

  //Sliding entrances
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"

  //Sliding entrances
  | "slideOutDown"
  | "slideOutLeft"
  | "slideOutRight"
  | "slideOutUp";
