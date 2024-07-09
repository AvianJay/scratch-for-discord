import Blockly from "blockly";

import blocklyMessages from "./zh_TW.json";

export const applyBlocklyLocale = () => {
    for (let key in blocklyMessages) {
        Blockly.Msg[key] = blocklyMessages[key];
    }
};

export const websiteMessages = {
    untitled: "未命名文件",
    help: "幫助",
    load: {
        error: "上傳的文件已損壞，無法由 Scratch For Discord 加載..."
    },
    file: {
        title: "文件",
        javascript: "導出為 JavaScript",
        open: "打開文件...",
        save: "保存"
    },
    edit: {
        title: "編輯",
        undo: "撤銷",
        redo: "重做",
        clear: "清除 {blockCount} 個區塊",
        cleanup: "清理區塊",
        cleardb: "清除數據庫"
    },
    lang: {
        title: "語言"
    },
    examples: {
        title: "示例",
        confirm: {
            title: "刪除當前區塊？",
            text: "您想在導入示例之前刪除當前項目的區塊嗎？",
            cancel: "取消",
            yes: "是",
            no: "否"
        },
        loaded: "成功導入示例 {example}！",
        ping_pong: "ping-pong 命令",
        command_parsing: "命令處理器",
        leveling: "經驗值和等級系統"
    },
    download: {
        title: "下載您的機器人",
        content: {
            title: "下載後如何啟動您的機器人？",
            unzipFile: "解壓下載的文件。",
            node: "安裝 NPM 和 Node.js（請在 Google 上搜索教程）",
            start: "在終端中運行 'npm install' 和 'npm start'",
            done: "您的機器人已啟動！"
        },
        cancel: "取消",
        confirm: "下載"
    },
    tour: {
        skip: "跳過導覽",
        previous: "上一個",
        next: "下一個",
        finish: "完成",
        steps: {
            load_examples: "導入示例以探索 Scratch4Discord！",
            run_test: "在此處測試您的機器人的功能！",
            export_code: "在此處導出您的代碼！"
        }
    },
    warnings: {
        login_block: "\"連接到 Discord\" 區塊在 \"基礎\" 類別中是必需的。"
    },
    run_modal: {
        title: "點擊開始以測試您的機器人！",
        start: "啟動機器人",
        stop: "停止機器人",
        invalid_token: "無法連接到 Discord... 也許機器人的令牌無效！",
        error: "無法連接到 Discord... 請稍後再試！",
        disabled: "⚠️ 此功能僅在使用 Scratch For Discord App 時可用（點擊 {此處} 獲取）",
        here: "此處"
    },
    code_modal: {
        title: "您的機器人的 JavaScript 代碼"
    },
    autosave: {
        title: "恢復項目",
        text: "您在退出 Scratch For Discord 之前未保存您的項目？沒問題，您可以從下面的菜單中選擇要恢復的項目！",
        restore: "恢復",
        cancel: "取消"
    }
};

export default {
    applyBlocklyLocale,
    websiteMessages
};
