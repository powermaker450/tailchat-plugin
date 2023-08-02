# ssdcc的tailchat插件列表
```json
{
    "label": "SSDC视频消息支持插件",
    "name": "cn.ssdcc.tailchat.video",
    "url": "https://ssdcc.github.io/tailchat-plugin/dist/plugins/cn.ssdcc.tailchat.video/index.js",
    "version": "0.0.0",
    "author": "ssdcc",
    "description": "提供视频消息能力",
    "requireRestart": true
}
```
# minio迁移
```bash
wget https://dl.min.io/client/mc/release/linux-amd64/mc
sudo docker ps
sudo docker exec -it tailchat-minio-1 /bin/bash
sudo docker cp mc <CONTAINER_ID>:/
sudo docker exec -it <IMAGE_NAME> chmod +x /mc
sudo docker exec -it <IMAGE_NAME> /mc alias set minio_data_tailchat http://127.0.0.1:9000 tailchat com.msgbyte.tailchat
sudo docker exec -it <IMAGE_NAME> /mc cp --recursive minio_data_tailchat/tailchat/ /minio_data_tailchat
sudo docker cp <CONTAINER_ID>:/minio_data_tailchat minio_data_tailchat
```