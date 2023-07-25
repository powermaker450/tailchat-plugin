import {
    regMessageExtraParser, regPluginCardItem,
    regChatInputAction, uploadFile, getMessageTextDecorators
} from '@capital/common';
import React, {useState} from 'react';
import {getServiceUrl} from '@capital/common';
import {Icon, Loadable} from '@capital/component';
import _get from "lodash/get";

const PLUGIN_ID = 'cn.ssdcc.tailchat.video';
const PLUGIN_NAME = 'SSDC视频消息支持插件';

console.log(`Plugin ${PLUGIN_NAME}(${PLUGIN_ID}) is loaded`);

regMessageExtraParser({
    name: 'com.msgbyte.linkmeta/urlParser',
    render({content}) {
        let url = '';
        let mp4 = content.match(/\[card type=file url=.*?\.mp4\]/g);
        if (mp4) {
            mp4 = mp4 + '';
            url = mp4.replace('.mp4]', '.mp4');
        }
        let webm = content.match(/\[card type=file url=.*?\.webm\]/g);
        if (webm) {
            webm = webm + '';
            url = webm.replace('.webm]', '.webm');
        }
        let ogg = content.match(/\[card type=file url=.*?\.ogg\]/g);
        if (ogg) {
            ogg = ogg + '';
            url = ogg.replace('.ogg]', '.ogg');
        }
        const [ishidden, setIshidden] = useState(true);

        function handleClick() {
            setIshidden(false);
        }

        if (url !== null && url !== '') {
            url = url.replace('[card type=file url=', '');
            url = String(url).replace('{BACKEND}', getServiceUrl());
            if (ishidden) {
                return (<div
                        className="max-w-full rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden">
                        <Icon icon="mdi:video-outline" onClick={handleClick}/>

                    </div>
                )

            } else {
                return (
                    <div
                        className="max-w-full rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden">
                        <video
                            src={url}
                            controls
                            autoPlay={false}
                            style={{maxHeight: 300, maxWidth: 300}}
                        ></video>
                    </div>

                )
            }
        }
        return;
    },
});
regPluginCardItem(
    'SsdccVideo', {
        render: Loadable(() =>
            VideoItem
        )
    }
)
const VideoItem: React.FC<{ payload: any; }> = React.memo(
    (props) => {
        const payload = props.payload ?? {};
        const url = payload.data.replace('{BACKEND}', getServiceUrl());
        const [ishidden, setIshidden] = useState(true);

        function handleClick() {
            setIshidden(false);
        }
        if (ishidden) {
            return (
                <div
                    className="max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden">
                    <div>
                        <div>{payload.label}</div>
                        <div>
                            <img src={payload.imgSrc} style={{height:200,width:300}}/>
                            <Icon icon="ph:play-bold" onClick={handleClick}
                                  style={{position:'absolute',top:80,left:100,width:100,height:100}}/>
                        </div>
                    </div>
                </div>
            )

        } else {
            return (
                <div
                    className="max-w-full border border-black border-opacity-20 rounded-md p-2 bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-10 inline-flex overflow-hidden">
                    <div>
                        <div>{payload.label}</div>
                        <video
                            src={url}
                            controls
                            autoPlay={true}
                            style={{maxHeight:300,maxWidth:300}}
                        ></video>
                    </div>
                </div>
            )
        }
    }
);
regChatInputAction({
    label: "发送视频",
    onClick: async (actions) => {
        const file = await openFile({accept: 'video/*'});
        const videoRes = await ImgChecked(file)
        const res = await uploadFile(file);
        const sendMsg = actions.sendMsg;
        sendMsg(
            getMessageTextDecorators().card(file.name, {
                type: 'SsdccVideo',
                data: res.url,
                width:videoRes.width,
                height:videoRes.height,
                imgSrc:videoRes.imgSrc
            })
        );
    },
});

/**
 * 打开一个选择文件的窗口, 并返回文件
 */
interface FileDialogOptions {
    accept?: string;
}

export async function openFile(
    fileDialogOptions?: FileDialogOptions
): Promise<File | null> {
    return new Promise((resolve) => {
        const fileEl = document.createElement('input');
        fileEl.setAttribute('type', 'file');
        if (typeof fileDialogOptions?.accept === 'string') {
            fileEl.accept = fileDialogOptions.accept;
        }
        fileEl.addEventListener('change', function (e) {
            const file: File | null = _get(this, ['files', 0], null);
            resolve(file);
            fileEl.remove();
        });

        fileEl.click();
    });
}

// 获取视频标题+时长+缩略图+宽高
let ImgChecked = async function(file) {
    return new Promise((resolve, reject) => {
        let video = document.createElement('video');
        var fileUrl = URL.createObjectURL(file);
        video.src = fileUrl;
        video.currentTime = 3; //截取缩略图时的视频时长，一定要设置，不然大概率白屏
        const imgWidth=300,imgHeight=200;  // 定义生成图片的宽高，其他宽高需求可以自己改
            video.oncanplay = ()=>{
                let x = 0, y = 0, width = 0, height = 0;
                // 计算缩小后图片的宽高以及canvas绘制的位置信息
                if ((video.videoWidth / video.videoHeight) >= (imgWidth/imgHeight)) {
                    width = imgWidth ;
                    height = video.videoHeight * (imgWidth / video.videoWidth);
                    x = 0;
                    y = (imgHeight- height) / 2;
                } else {
                    height = imgHeight;
                    width = video.videoWidth * (imgHeight / video.videoHeight);
                    y = 0;
                    x = (imgWidth - width) / 2;
                }
                var canvas = document.createElement("canvas");
                canvas.width = imgWidth ;
                canvas.height = imgHeight;
                let ctx = canvas.getContext("2d");
                ctx.fillStyle = "#000";
                ctx.fillRect(0, 0, imgWidth , imgHeight);
                ctx.drawImage(video, x, y, width, height);
                let imgSrc = canvas.toDataURL("image/png");
                resolve({
                    imgSrc,//base64的缩略图图片路径
                    width:video.videoWidth,
                    height:video.videoHeight,
                })
            }
    })
}
