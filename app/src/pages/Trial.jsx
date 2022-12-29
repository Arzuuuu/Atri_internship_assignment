import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { useDiv1Cb, useFlex2Cb, useFlex204Cb, useFlex205Cb, useTextBox122Cb, useCarousel7Cb } from "../page-cbs/trial";
import "../page-css/trial.css";
import "../custom/trial";

export default function Trial() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div1Props = useStore((state)=>state["trial"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["trial"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex2Props = useStore((state)=>state["trial"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["trial"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex204Props = useStore((state)=>state["trial"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["trial"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["trial"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["trial"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const TextBox122Props = useStore((state)=>state["trial"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["trial"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Carousel7Props = useStore((state)=>state["trial"]["Carousel7"]);
const Carousel7IoProps = useIoStore((state)=>state["trial"]["Carousel7"]);
const Carousel7Cb = useCarousel7Cb()

  return (<>
  <Div className="p-trial Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Flex1 className="p-trial Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}/>
</Div>
<Flex1 className="p-trial Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Flex1 className="p-trial Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<TextBox1 className="p-trial TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Carousel className="p-trial Carousel7 bpt" {...Carousel7Props} {...Carousel7Cb} {...Carousel7IoProps}/>
</Flex1>
</Flex1>
  </>);
}
