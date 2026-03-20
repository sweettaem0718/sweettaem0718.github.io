(() => {
    let frames = window.TAEMIN4CUT_FRAMES || [];
    const CONSENT_STORAGE_KEY = "taemin4cutConsentV1";
    const LANGUAGE_STORAGE_KEY = "taemin4cutLanguageV1";
    const I18N = {
        ko: {
            "doc.title": "TAEMIN4CUT | 태민네컷",
            "doc.description": "TAEMIN4CUT 태민네컷 - 웹캠 4컷 촬영과 태민 포토프레임 합성",
            "brand.sub": "태민네컷",
            "language.label": "언어",
            "consent.title": "서비스 이용 동의",
            "consent.body": "본 서비스는 촬영된 사진을 서버에 저장하지 않으며, 사용자의 정보를 수집하지 않습니다.",
            "consent.agree": "동의하고 시작하기",
            "frame.title": "프레임 선택",
            "frame.hint": "원하는 프레임을 선택하면 촬영 화면으로 이동합니다.",
            "frame.fallback": "미리보기 없음",
            "capture.start": "촬영 시작",
            "capture.title": "촬영 / 편집",
            "layout.label": "레이아웃",
            "layout.vertical": "1x4 세로",
            "mirror.on": "카메라 반전 ON",
            "mirror.off": "카메라 반전 OFF",
            "camera.loading": "웹캠을 불러오는 중...",
            "save.button": "저장하기",
            "retry.button": "다시하기",
            "noscript": "이 서비스는 JavaScript가 필요합니다.",
            "toast.title": "안내",
            "toast.default": "사진을 클릭 시 촬영됩니다.",
            "toast.consentDone": "동의가 완료되었습니다.",
            "toast.saveDone": "저장완료!\n저장 된 사진을 확인하세요!",
            "toast.captureHint": "사진을 클릭 시 촬영됩니다.",
            "toast.captureFinished": "촬영완료!\n하단의 저장버튼을 눌러 결과물을 확인하세요!",
            "toast.cutDone": "컷 {n} 촬영 완료",
            "status.cameraUnsupported": "이 브라우저는 웹캠을 지원하지 않습니다.",
            "status.cameraDenied": "카메라 접근 권한이 거부되었습니다.",
            "status.cameraNotReady": "카메라가 준비되지 않았습니다.",
            "status.frameComposeError": "프레임 합성 중 문제가 발생했습니다.",
            "status.liveComposeError": "라이브 프리뷰 합성 중 문제가 발생했습니다.",
            "status.frameLoadError": "프레임 정보를 불러오지 못했습니다.",
            "step.capture": "STEP 1. 촬영 / 편집 ({count}/4)",
            "step.download": "STEP 2. 프레임 선택 및 다운로드",
            "cut.status": "컷 {index} / 4",
        },
        en: {
            "doc.title": "TAEMIN4CUT",
            "doc.description": "TAEMIN4CUT - Capture 4 photos with webcam and compose a photoframe.",
            "brand.sub": "TAEMIN 4CUT",
            "language.label": "Language",
            "consent.title": "Consent to Use",
            "consent.body": "This service does not store your photos on the server and does not collect personal information.",
            "consent.agree": "Agree and Start",
            "frame.title": "Choose a Frame",
            "frame.hint": "Select a frame to move to the shooting screen.",
            "frame.fallback": "No preview",
            "capture.start": "Start Capture",
            "capture.title": "Capture / Edit",
            "layout.label": "Layout",
            "layout.vertical": "1x4 Vertical",
            "mirror.on": "Mirror ON",
            "mirror.off": "Mirror OFF",
            "camera.loading": "Loading webcam...",
            "save.button": "Save",
            "retry.button": "Try Again",
            "noscript": "This service requires JavaScript.",
            "toast.title": "Info",
            "toast.default": "Click the photo area to capture.",
            "toast.consentDone": "Consent completed.",
            "toast.saveDone": "Saved!\nCheck your downloaded photo.",
            "toast.captureHint": "Click the photo area to capture.",
            "toast.captureFinished": "Capture complete!\nPress the Save button below.",
            "toast.cutDone": "Shot {n} captured",
            "status.cameraUnsupported": "This browser does not support webcam access.",
            "status.cameraDenied": "Camera access was denied.",
            "status.cameraNotReady": "Camera is not ready.",
            "status.frameComposeError": "An error occurred while composing the frame.",
            "status.liveComposeError": "An error occurred during live preview composition.",
            "status.frameLoadError": "Failed to load frame data.",
            "step.capture": "STEP 1. Capture / Edit ({count}/4)",
            "step.download": "STEP 2. Select Frame and Download",
            "cut.status": "Shot {index} / 4",
        },
        ja: {
            "doc.title": "TAEMIN4CUT",
            "doc.description": "TAEMIN4CUT - ウェブカメラで4カット撮影してフォトフレーム合成。",
            "brand.sub": "テミン4カット",
            "language.label": "言語",
            "consent.title": "サービス利用同意",
            "consent.body": "本サービスは撮影写真をサーバーに保存せず、個人情報を収集しません。",
            "consent.agree": "同意して開始",
            "frame.title": "フレーム選択",
            "frame.hint": "フレームを選択すると撮影画面に移動します。",
            "frame.fallback": "プレビューなし",
            "capture.start": "撮影開始",
            "capture.title": "撮影 / 編集",
            "layout.label": "レイアウト",
            "layout.vertical": "1x4 縦",
            "mirror.on": "ミラー ON",
            "mirror.off": "ミラー OFF",
            "camera.loading": "ウェブカメラを読み込み中...",
            "save.button": "保存",
            "retry.button": "もう一度試す",
            "noscript": "このサービスにはJavaScriptが必要です。",
            "toast.title": "案内",
            "toast.default": "写真エリアをクリックすると撮影されます。",
            "toast.consentDone": "同意が完了しました。",
            "toast.saveDone": "保存完了！\n保存した写真を確認してください。",
            "toast.captureHint": "写真エリアをクリックすると撮影されます。",
            "toast.captureFinished": "撮影完了！\n下の保存ボタンを押してください。",
            "toast.cutDone": "{n}カット撮影完了",
            "status.cameraUnsupported": "このブラウザはウェブカメラに対応していません。",
            "status.cameraDenied": "カメラへのアクセスが拒否されました。",
            "status.cameraNotReady": "カメラの準備ができていません。",
            "status.frameComposeError": "フレーム合成中に問題が発生しました。",
            "status.liveComposeError": "ライブプレビュー合成中に問題が発生しました。",
            "status.frameLoadError": "フレーム情報の読み込みに失敗しました。",
            "step.capture": "STEP 1. 撮影 / 編集 ({count}/4)",
            "step.download": "STEP 2. フレーム選択と保存",
            "cut.status": "{index}カット / 4",
        },
        zh: {
            "doc.title": "TAEMIN4CUT",
            "doc.description": "TAEMIN4CUT - 使用摄像头拍摄四格并合成相框。",
            "brand.sub": "泰民四连拍",
            "language.label": "语言",
            "consent.title": "服务使用同意",
            "consent.body": "本服务不会在服务器保存照片，也不会收集个人信息。",
            "consent.agree": "同意并开始",
            "frame.title": "选择相框",
            "frame.hint": "选择相框后进入拍摄页面。",
            "frame.fallback": "无预览",
            "capture.start": "开始拍摄",
            "capture.title": "拍摄 / 编辑",
            "layout.label": "布局",
            "layout.vertical": "1x4 竖版",
            "mirror.on": "镜像 ON",
            "mirror.off": "镜像 OFF",
            "camera.loading": "正在加载摄像头...",
            "save.button": "保存",
            "retry.button": "重试",
            "noscript": "本服务需要启用 JavaScript。",
            "toast.title": "提示",
            "toast.default": "点击照片区域即可拍摄。",
            "toast.consentDone": "已完成同意。",
            "toast.saveDone": "保存完成！\n请查看已保存的照片。",
            "toast.captureHint": "点击照片区域即可拍摄。",
            "toast.captureFinished": "拍摄完成！\n请点击下方保存按钮。",
            "toast.cutDone": "第 {n} 张拍摄完成",
            "status.cameraUnsupported": "此浏览器不支持摄像头。",
            "status.cameraDenied": "摄像头权限被拒绝。",
            "status.cameraNotReady": "摄像头尚未准备好。",
            "status.frameComposeError": "合成相框时发生错误。",
            "status.liveComposeError": "实时预览合成时发生错误。",
            "status.frameLoadError": "加载相框数据失败。",
            "step.capture": "STEP 1. 拍摄 / 编辑 ({count}/4)",
            "step.download": "STEP 2. 选择相框并下载",
            "cut.status": "第 {index} 张 / 4",
        },
    };
    const state = {
        selectedLayout: "VERTICAL_1X4",
        isCameraMirrored: true,
        currentCutIndex: 0,
        cuts: [],
        selectedFrameId: null,
        stream: null,
        liveRenderId: null,
        toastTimer: null,
        imageCache: new Map(),
        cameraInitRequested: false,
        hasConsent: false,
        language: "ko",
    };

    const elements = {
        video: document.getElementById("cameraPreview"),
        cameraBox: document.getElementById("cameraBox"),
        liveFrameCanvas: document.getElementById("liveFrameCanvas"),
        captureCanvas: document.getElementById("captureCanvas"),
        finalCanvas: document.getElementById("finalCanvas"),
        cameraMirrorBtn: document.getElementById("cameraMirrorBtn"),
        langSwitcher: document.getElementById("langSwitcher"),
        langSwitcherLabel: document.getElementById("langSwitcherLabel"),
        brandSub: document.getElementById("brandSub"),
        captureBtn: document.getElementById("captureBtn"),
        retakeBtn: document.getElementById("retakeBtn"),
        saveBtn: document.getElementById("saveBtn"),
        retryBtn: document.getElementById("retryBtn"),
        startCaptureBtn: document.getElementById("startCaptureBtn"),
        consentModal: document.getElementById("consentModal"),
        consentAgreeBtn: document.getElementById("consentAgreeBtn"),
        consentTitle: document.getElementById("consentTitle"),
        consentBody: document.getElementById("consentBody"),
        framePanel: document.getElementById("framePanel"),
        framePanelTitle: document.getElementById("framePanelTitle"),
        framePanelHint: document.getElementById("framePanelHint"),
        capturePanel: document.getElementById("capturePanel"),
        capturePanelTitle: document.getElementById("capturePanelTitle"),
        stepIndicator: document.getElementById("stepIndicator"),
        cutStatus: document.getElementById("cutStatus"),
        layoutLabel: document.getElementById("layoutLabel"),
        layoutVerticalPill: document.getElementById("layoutVerticalPill"),
        cameraMessage: document.getElementById("cameraMessage"),
        statusMessage: document.getElementById("statusMessage"),
        noScriptMessage: document.getElementById("noscriptMessage"),
        frameList: document.getElementById("frameList"),
        toast: document.getElementById("toast"),
        toastTitle: document.getElementById("toastTitle"),
        toastMessage: document.getElementById("toastMessage"),
        confettiLayer: document.getElementById("confettiLayer"),
    };

    async function init() {
        initLanguage();
        await ensureFramesLoaded();
        initConsentGate();
        initCuts();
        renderFrameCards();
        bindFrameSelection();
        bindCameraControls();
        bindMirrorToggle();
        bindSave();
        bindRetry();
        bindFlowControls();
        selectDefaultFrame();
        updateUI();
        if (state.hasConsent) {
            requestCameraPermissionOnLoad();
        }
    }

    async function ensureFramesLoaded() {
        if (Array.isArray(frames) && frames.length > 0) {
            frames = frames.map(normalizeFramePaths);
            return;
        }

        try {
            const response = await fetch("frames.json", { cache: "no-store" });
            if (!response.ok) throw new Error(`frames.json ${response.status}`);
            const json = await response.json();
            frames = Array.isArray(json) ? json.map(normalizeFramePaths) : [];
        } catch (error) {
            frames = [];
            showStatusMessage(t("status.frameLoadError"));
        }
    }

    function normalizeFramePaths(frame) {
        if (!frame || typeof frame !== "object") return frame;
        return {
            ...frame,
            previewImagePath: normalizeAssetPath(frame.previewImagePath),
            frameBaseImagePath: normalizeAssetPath(frame.frameBaseImagePath),
            overlayImagePath: normalizeAssetPath(frame.overlayImagePath),
            perCutOverlayImagePath: normalizeAssetPath(frame.perCutOverlayImagePath),
            perCutOverlayImagePaths: Array.isArray(frame.perCutOverlayImagePaths)
                ? frame.perCutOverlayImagePaths.map(normalizeAssetPath)
                : frame.perCutOverlayImagePaths,
        };
    }

    function normalizeAssetPath(path) {
        if (!path || typeof path !== "string") return path;
        if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
        return path.replace(/^\/+/, "");
    }

    function initLanguage() {
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        const detected = savedLanguage || detectBrowserLanguage();
        state.language = normalizeLanguage(detected);
        if (elements.langSwitcher) {
            elements.langSwitcher.value = state.language;
            elements.langSwitcher.addEventListener("change", (event) => {
                setLanguage(event.target.value);
            });
        }
        applyTranslations();
    }

    function detectBrowserLanguage() {
        const primary = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
        return primary.toLowerCase();
    }

    function normalizeLanguage(language) {
        const normalized = (language || "").toLowerCase();
        if (normalized.startsWith("ko")) return "ko";
        if (normalized.startsWith("ja")) return "ja";
        if (normalized.startsWith("zh")) return "zh";
        return "en";
    }

    function setLanguage(language) {
        state.language = normalizeLanguage(language);
        localStorage.setItem(LANGUAGE_STORAGE_KEY, state.language);
        applyTranslations();
        renderFrameCards();
        updateFrameSelection();
        updateMirrorToggleButton();
        updateUI();
    }

    function t(key, params = {}) {
        const table = I18N[state.language] || I18N.en;
        const fallbackTable = I18N.en;
        const template = table[key] || fallbackTable[key] || key;
        return template.replace(/\{(\w+)}/g, (_, token) => {
            return Object.prototype.hasOwnProperty.call(params, token) ? String(params[token]) : "";
        });
    }

    function applyTranslations() {
        document.documentElement.lang = state.language;
        document.title = t("doc.title");
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute("content", t("doc.description"));

        if (elements.brandSub) elements.brandSub.textContent = t("brand.sub");
        if (elements.langSwitcherLabel) elements.langSwitcherLabel.textContent = t("language.label");
        if (elements.langSwitcher) elements.langSwitcher.setAttribute("aria-label", t("language.label"));
        if (elements.consentTitle) elements.consentTitle.textContent = t("consent.title");
        if (elements.consentBody) elements.consentBody.textContent = t("consent.body");
        if (elements.consentAgreeBtn) elements.consentAgreeBtn.textContent = t("consent.agree");
        if (elements.framePanelTitle) elements.framePanelTitle.textContent = t("frame.title");
        if (elements.framePanelHint) elements.framePanelHint.textContent = t("frame.hint");
        if (elements.startCaptureBtn) elements.startCaptureBtn.textContent = t("capture.start");
        if (elements.capturePanelTitle) elements.capturePanelTitle.textContent = t("capture.title");
        if (elements.layoutLabel) elements.layoutLabel.textContent = t("layout.label");
        if (elements.layoutVerticalPill) elements.layoutVerticalPill.textContent = t("layout.vertical");
        if (elements.saveBtn) elements.saveBtn.textContent = t("save.button");
        if (elements.retryBtn) elements.retryBtn.textContent = t("retry.button");
        if (elements.noScriptMessage) elements.noScriptMessage.textContent = t("noscript");
        if (elements.toastTitle) elements.toastTitle.textContent = t("toast.title");
        if (elements.toastMessage) elements.toastMessage.textContent = t("toast.default");
        if (elements.cameraMessage && !state.cameraInitRequested && elements.cameraMessage.classList.contains("hidden") === false) {
            elements.cameraMessage.textContent = t("camera.loading");
        }
        const frameFallbacks = document.querySelectorAll("[data-i18n='frame.fallback']");
        frameFallbacks.forEach((item) => {
            item.textContent = t("frame.fallback");
        });
        updateMirrorToggleButton();
    }

    function initConsentGate() {
        state.hasConsent = localStorage.getItem(CONSENT_STORAGE_KEY) === "agreed";
        if (elements.consentAgreeBtn) {
            elements.consentAgreeBtn.addEventListener("click", acceptConsent);
        }
        setConsentModalVisible(!state.hasConsent);
    }

    function acceptConsent() {
        state.hasConsent = true;
        localStorage.setItem(CONSENT_STORAGE_KEY, "agreed");
        setConsentModalVisible(false);
        updateStartCaptureAvailability();
        requestCameraPermissionOnLoad();
        showToast(t("toast.consentDone"));
    }

    function setConsentModalVisible(visible) {
        if (!elements.consentModal) return;
        elements.consentModal.classList.toggle("hidden", !visible);
        document.body.classList.toggle("modal-open", visible);
    }

    function requestCameraPermissionOnLoad() {
        if (state.cameraInitRequested) return;
        state.cameraInitRequested = true;
        // Run after initial paint so browsers consistently show permission prompt on load.
        window.setTimeout(() => {
            initCamera();
        }, 120);
    }

    function initCuts() {
        state.cuts = Array.from({ length: 4 }).map(() => ({
            originalImageDataUrl: null,
            scale: 1,
            offsetX: 0,
            offsetY: 0,
            confirmed: false,
        }));
    }

    function renderFrameCards() {
        if (!elements.frameList) return;
        elements.frameList.innerHTML = "";
        for (const frame of frames) {
            const card = document.createElement("div");
            card.className = "frame-card";
            card.dataset.frameId = frame.id || "";
            card.dataset.preview = frame.previewImagePath || "";

            const thumb = document.createElement("div");
            thumb.className = "frame-thumb";

            const img = document.createElement("img");
            img.alt = "frame preview";
            if (frame.previewImagePath) {
                img.src = frame.previewImagePath;
            } else {
                img.style.display = "none";
            }

            const fallback = document.createElement("div");
            fallback.className = "frame-thumb-fallback";
            fallback.dataset.i18n = "frame.fallback";
            fallback.textContent = t("frame.fallback");

            img.onload = () => {
                fallback.style.display = "none";
            };
            img.onerror = () => {
                img.style.display = "none";
                fallback.style.display = "";
            };

            thumb.appendChild(img);
            thumb.appendChild(fallback);
            card.appendChild(thumb);

            const name = document.createElement("div");
            name.className = "frame-name";
            name.textContent = frame.name || "";
            card.appendChild(name);
            elements.frameList.appendChild(card);
        }
    }

    function bindFrameSelection() {
        if (!elements.frameList) return;
        elements.frameList.addEventListener("click", (event) => {
            const card = event.target.closest(".frame-card");
            if (!card) return;
            const frameId = card.dataset.frameId;
            if (!frameId) return;
            state.selectedFrameId = frameId;
            updateFrameSelection();
            renderFinalPreview();
            renderLiveFrame();
            updateStartCaptureAvailability();
        });
    }

    function bindCameraControls() {
        if (elements.retakeBtn) {
            elements.retakeBtn.addEventListener("click", retakeCut);
        }
        if (elements.liveFrameCanvas) {
            elements.liveFrameCanvas.addEventListener("click", () => {
                capturePhoto();
            });
        }
    }

    function bindMirrorToggle() {
        updateMirrorToggleButton();
        if (!elements.cameraMirrorBtn) return;
        elements.cameraMirrorBtn.addEventListener("click", () => {
            state.isCameraMirrored = !state.isCameraMirrored;
            updateMirrorToggleButton();
            renderLiveFrame();
        });
    }

    function bindSave() {
        elements.saveBtn.addEventListener("click", async () => {
            const frame = getSelectedFrame();
            if (!frame) return;
            await renderLiveFrame();
            await nextFrame();
            const dataUrl = elements.liveFrameCanvas.toDataURL("image/jpeg", 0.92);
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `taemin4cut-${getTimestamp()}.jpg`;
            link.click();
            showToast(t("toast.saveDone"));
            launchConfettiBurst();
        });
    }

    function bindRetry() {
        if (!elements.retryBtn) return;
        elements.retryBtn.addEventListener("click", () => {
            resetCaptureFlow();
        });
    }

    function resetCaptureFlow() {
        state.currentCutIndex = 0;
        state.isCameraMirrored = true;
        initCuts();

        if (elements.framePanel) elements.framePanel.classList.remove("hidden");
        if (elements.capturePanel) elements.capturePanel.classList.add("hidden");
        if (elements.statusMessage) elements.statusMessage.textContent = "";
        if (elements.toast) elements.toast.classList.remove("show");
        if (elements.confettiLayer) elements.confettiLayer.innerHTML = "";

        updateMirrorToggleButton();
        updateUI();
        renderFinalPreview();
        renderLiveFrame();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    function bindFlowControls() {
        if (elements.startCaptureBtn) {
            elements.startCaptureBtn.addEventListener("click", () => {
                if (!state.hasConsent) {
                    setConsentModalVisible(true);
                    return;
                }
                if (!state.selectedFrameId) return;
                elements.framePanel.classList.add("hidden");
                elements.capturePanel.classList.remove("hidden");
                updateUI();
                renderLiveFrame();
                showToast(t("toast.captureHint"));
            });
        }
    }

    function initCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showCameraMessage(t("status.cameraUnsupported"));
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
            .then((stream) => {
                state.stream = stream;
                elements.video.srcObject = stream;
                showCameraMessage(null);
                startLiveRender();
            })
            .catch(() => {
                showCameraMessage(t("status.cameraDenied"));
            });
    }

    function capturePhoto() {
        if (!elements.video.videoWidth) {
            showStatusMessage(t("status.cameraNotReady"));
            return;
        }

        const canvas = elements.captureCanvas;
        canvas.width = elements.video.videoWidth;
        canvas.height = elements.video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (state.isCameraMirrored) {
            ctx.save();
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(elements.video, 0, 0, canvas.width, canvas.height);
            ctx.restore();
        } else {
            ctx.drawImage(elements.video, 0, 0, canvas.width, canvas.height);
        }
        const dataUrl = canvas.toDataURL("image/png");
        const capturedCutNumber = state.currentCutIndex + 1;

        const cut = getCurrentCut();
        cut.originalImageDataUrl = dataUrl;
        cut.scale = 1;
        cut.offsetX = 0;
        cut.offsetY = 0;
        cut.confirmed = true;
        if (state.currentCutIndex < 3) {
            state.currentCutIndex += 1;
            playNextCutSlide();
        }
        autoScrollForNextCut();
        updateUI();
        renderFinalPreview();
        renderLiveFrame();
        const allCaptured = state.cuts.every((item) => item.confirmed);
        if (allCaptured) {
            showToast(t("toast.captureFinished"));
            return;
        }
        showToast(t("toast.cutDone", { n: capturedCutNumber }));
    }

    function playNextCutSlide() {
        if (!elements.cameraBox) return;
        elements.cameraBox.classList.remove("cut-slide-next");
        // Force reflow so repeated captures retrigger animation.
        void elements.cameraBox.offsetWidth;
        elements.cameraBox.classList.add("cut-slide-next");
        window.setTimeout(() => {
            elements.cameraBox.classList.remove("cut-slide-next");
        }, 280);
    }

    function autoScrollForNextCut() {
        const scrollAmount = Math.max(window.innerHeight * 0.35, 180);
        window.setTimeout(() => {
            window.scrollBy({
                top: scrollAmount,
                left: 0,
                behavior: "smooth",
            });
        }, 120);
    }

    function retakeCut() {
        const cut = getCurrentCut();
        cut.originalImageDataUrl = null;
        cut.scale = 1;
        cut.offsetX = 0;
        cut.offsetY = 0;
        cut.confirmed = false;
        updateUI();
        renderFinalPreview();
        renderLiveFrame();
    }

    function updateUI() {
        const cut = getCurrentCut();
        updateCameraBoxAspect();
        updateStartCaptureAvailability();
        if (elements.cutStatus) {
            elements.cutStatus.textContent = t("cut.status", { index: state.currentCutIndex + 1 });
        }

        if (cut.originalImageDataUrl) {
            if (elements.captureBtn) elements.captureBtn.classList.add("hidden");
            if (elements.retakeBtn) elements.retakeBtn.classList.remove("hidden");
        } else {
            if (elements.captureBtn) elements.captureBtn.classList.remove("hidden");
            if (elements.retakeBtn) elements.retakeBtn.classList.add("hidden");
        }

        const stepText = getStepText();
        if (elements.stepIndicator) {
            elements.stepIndicator.textContent = stepText;
        }

        if (elements.saveBtn) elements.saveBtn.disabled = !state.cuts.every((c) => c.confirmed);
        updateFrameSelection();
        renderLiveFrame();
    }

    function updateStartCaptureAvailability() {
        if (!elements.startCaptureBtn) return;
        elements.startCaptureBtn.disabled = !(state.hasConsent && state.selectedFrameId);
    }

    function updateCameraBoxAspect() {
        const frame = getSelectedFrame();
        if (!frame) return;
        elements.cameraBox.style.aspectRatio = `${frame.width} / ${frame.height}`;
    }

    function getStepText() {
        const confirmedCount = state.cuts.filter((c) => c.confirmed).length;
        if (confirmedCount < 4) {
            return t("step.capture", { count: confirmedCount });
        }
        return t("step.download");
    }

    function selectDefaultFrame() {
        const frame = frames[0];
        state.selectedFrameId = frame ? frame.id : null;
        updateFrameSelection();
        renderFinalPreview();
        renderLiveFrame();
    }

    function updateFrameSelection() {
        if (!elements.frameList) return;
        const cards = elements.frameList.querySelectorAll(".frame-card");
        cards.forEach((card) => {
            const isActive = card.dataset.frameId === state.selectedFrameId;
            card.classList.toggle("active", isActive);
        });
    }

    function renderFinalPreview() {
        const frame = getSelectedFrame();
        if (!frame) return;
        const canvas = elements.finalCanvas;
        canvas.width = frame.width;
        canvas.height = frame.height;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = frame.backgroundColor || "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        Promise.resolve()
            .then(() => loadImage(frame.frameBaseImagePath))
            .then((base) => {
                if (base) {
                    ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
                }
                return drawCuts(ctx, frame);
            })
            .then(() => loadImage(frame.overlayImagePath))
            .then((overlay) => {
                if (overlay) {
                    ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
                }
            })
            .catch(() => {
                showStatusMessage(t("status.frameComposeError"));
            });
    }

    function startLiveRender() {
        if (state.liveRenderId) cancelAnimationFrame(state.liveRenderId);
        const loop = () => {
            renderLiveFrame();
            state.liveRenderId = requestAnimationFrame(loop);
        };
        loop();
    }

    async function renderLiveFrame() {
        const frame = getSelectedFrame();
        if (!frame) return;
        const canvas = elements.liveFrameCanvas;
        canvas.width = frame.width;
        canvas.height = frame.height;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = frame.backgroundColor || "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const videoReady = elements.video.videoWidth > 0;

        try {
            const base = await loadImage(frame.frameBaseImagePath);
            if (base) {
                ctx.drawImage(base, 0, 0, canvas.width, canvas.height);
            }

            for (const targetSlot of frame.photoSlots) {
                const perCutOverlay = await loadPerCutOverlay(frame, targetSlot.index);
                const cut = state.cuts[targetSlot.index];
                const isCurrent = targetSlot.index === state.currentCutIndex;
                if (cut && cut.originalImageDataUrl) {
                    const image = await loadImage(cut.originalImageDataUrl);
                    if (image) {
                        drawMediaIntoSlot(ctx, image, targetSlot, cut, targetSlot.x, targetSlot.y);
                    }
                    if (perCutOverlay) {
                        drawOverlayIntoSlot(ctx, perCutOverlay, targetSlot);
                    }
                    continue;
                }

                if (isCurrent && videoReady) {
                    drawMediaIntoSlot(ctx, elements.video, targetSlot, { scale: 1, offsetX: 0, offsetY: 0 }, targetSlot.x, targetSlot.y);
                    if (perCutOverlay) {
                        drawOverlayIntoSlot(ctx, perCutOverlay, targetSlot);
                    }
                }
            }

            const overlay = await loadImage(frame.overlayImagePath);
            if (overlay) {
                ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
            }
        } catch (error) {
            showStatusMessage(t("status.liveComposeError"));
        }
    }

    async function drawCuts(ctx, frame) {
        for (const slot of frame.photoSlots) {
            const perCutOverlay = await loadPerCutOverlay(frame, slot.index);
            const cut = state.cuts[slot.index];
            if (!cut || !cut.originalImageDataUrl) continue;
            const image = await loadImage(cut.originalImageDataUrl);
            if (!image) continue;
            drawCutIntoSlot(ctx, image, slot, cut, slot.x, slot.y);
            if (perCutOverlay) {
                drawOverlayIntoSlot(ctx, perCutOverlay, slot);
            }
        }
    }

    function drawCutIntoSlot(ctx, image, slot, cut, offsetX, offsetY) {
        drawMediaIntoSlot(ctx, image, slot, cut, offsetX, offsetY);
    }

    async function loadPerCutOverlay(frame, slotIndex) {
        const perCutPaths = Array.isArray(frame.perCutOverlayImagePaths) ? frame.perCutOverlayImagePaths : null;
        const slotOverlayPath = perCutPaths && perCutPaths[slotIndex] ? perCutPaths[slotIndex] : frame.perCutOverlayImagePath;
        if (!slotOverlayPath) return null;
        return loadImage(slotOverlayPath);
    }

    function drawMediaIntoSlot(ctx, media, slot, cut, offsetX, offsetY) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(offsetX, offsetY, slot.width, slot.height);
        ctx.clip();

        const sourceWidth = media.videoWidth || media.width;
        const sourceHeight = media.videoHeight || media.height;
        if (!sourceWidth || !sourceHeight) {
            ctx.restore();
            return;
        }

        const baseScale = Math.max(slot.width / sourceWidth, slot.height / sourceHeight);
        const scale = baseScale * cut.scale;
        const drawWidth = sourceWidth * scale;
        const drawHeight = sourceHeight * scale;
        const originX = offsetX + (slot.width - drawWidth) / 2 + cut.offsetX;
        const originY = offsetY + (slot.height - drawHeight) / 2 + cut.offsetY;
        const shouldMirror = media === elements.video && state.isCameraMirrored;

        if (shouldMirror) {
            ctx.save();
            ctx.translate(offsetX + slot.width, 0);
            ctx.scale(-1, 1);
            const mirroredOriginX = offsetX + slot.width - (originX + drawWidth);
            ctx.drawImage(media, mirroredOriginX, originY, drawWidth, drawHeight);
            ctx.restore();
        } else {
            ctx.drawImage(media, originX, originY, drawWidth, drawHeight);
        }
        ctx.restore();
    }

    function updateMirrorToggleButton() {
        if (!elements.cameraMirrorBtn) return;
        const enabled = state.isCameraMirrored;
        elements.cameraMirrorBtn.textContent = enabled ? t("mirror.on") : t("mirror.off");
        elements.cameraMirrorBtn.classList.toggle("active", enabled);
    }

    function drawOverlayIntoSlot(ctx, overlay, slot) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(slot.x, slot.y, slot.width, slot.height);
        ctx.clip();

        const scale = Math.min(slot.width / overlay.width, slot.height / overlay.height);
        const drawWidth = overlay.width * scale;
        const drawHeight = overlay.height * scale;
        const originX = slot.x + (slot.width - drawWidth) / 2;
        const originY = slot.y + (slot.height - drawHeight) / 2;

        ctx.drawImage(overlay, originX, originY, drawWidth, drawHeight);
        ctx.restore();
    }

    function loadImage(src) {
        if (!src) return Promise.resolve(null);
        if (state.imageCache.has(src)) return state.imageCache.get(src);

        const promise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = src;
        });

        state.imageCache.set(src, promise);
        return promise;
    }

    function getCurrentCut() {
        return state.cuts[state.currentCutIndex];
    }

    function getSelectedFrame() {
        return frames.find((f) => f.id === state.selectedFrameId);
    }

    function showCameraMessage(message) {
        if (message) {
            elements.cameraMessage.textContent = message;
            elements.cameraMessage.classList.remove("hidden");
        } else {
            elements.cameraMessage.textContent = "";
            elements.cameraMessage.classList.add("hidden");
        }
    }

    function showStatusMessage(message) {
        if (!message) {
            elements.statusMessage.textContent = "";
            return;
        }
        elements.statusMessage.textContent = message;
    }

    function showToast(message) {
        if (!elements.toast) return;
        const messageEl = elements.toast.querySelector(".toast-message");
        if (messageEl) {
            messageEl.textContent = message;
        }
        elements.toast.classList.add("show");
        clearTimeout(state.toastTimer);
        state.toastTimer = setTimeout(() => {
            elements.toast.classList.remove("show");
        }, 1800);
    }

    function launchConfettiBurst() {
        if (!elements.confettiLayer) return;
        const colors = ["#ef3b76", "#f59e0b", "#22c55e", "#3b82f6", "#f43f5e", "#14b8a6"];
        const pieceCount = 120;
        const viewportWidth = window.innerWidth || 1280;
        const viewportHeight = window.innerHeight || 720;
        for (let index = 0; index < pieceCount; index += 1) {
            const piece = document.createElement("span");
            piece.className = "confetti-piece";
            piece.style.backgroundColor = colors[index % colors.length];
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.top = `${-12 - Math.random() * 24}px`;
            elements.confettiLayer.appendChild(piece);

            const driftX = (Math.random() - 0.5) * (viewportWidth * 0.22);
            const fallY = viewportHeight + 140 + Math.random() * 120;
            const spin = (Math.random() > 0.5 ? 1 : -1) * (240 + Math.random() * 520);
            const duration = 1200 + Math.random() * 900;
            const delay = Math.random() * 260;

            piece.animate(
                [
                    { transform: "translate3d(0, 0, 0) rotate(0deg)", opacity: 1 },
                    { transform: `translate3d(${driftX * 0.35}px, ${fallY * 0.45}px, 0) rotate(${spin * 0.45}deg)`, opacity: 1, offset: 0.45 },
                    { transform: `translate3d(${driftX}px, ${fallY}px, 0) rotate(${spin}deg)`, opacity: 0 }
                ],
                {
                    duration,
                    delay,
                    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                    fill: "forwards",
                }
            );
            window.setTimeout(() => {
                piece.remove();
            }, duration + delay + 60);
        }
    }

    function getTimestamp() {
        const now = new Date();
        const pad = (value) => value.toString().padStart(2, "0");
        return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    }

    function nextFrame() {
        return new Promise((resolve) => {
            requestAnimationFrame(() => resolve());
        });
    }

    init();
})();
