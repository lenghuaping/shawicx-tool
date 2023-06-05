import type {Ref} from 'vue'
import {ref} from 'vue';

interface IWebsocketOptions {
  // url: string;
  pingInterval?: number;
  pingMessage?: string;
}

// /^wss?:\/\/[^\s/$.?#].[^\s]*$/i

const DEFAULT_PING_INTERVAL: number = 5000;
const DEFAULT_PING_MESSAGE: string = 'ping';

export default class WebSocketUtil {
  // readonly url: string;
  readonly pingInterval: number;
  private ws: Ref<WebSocket | null>;
  private pingTimeout: NodeJS.Timeout | undefined;
  private pingMessage: string;

  constructor(options: IWebsocketOptions) {
    // this.url = options.url
    this.ws = ref(null);
    this.pingInterval = options.pingInterval || DEFAULT_PING_INTERVAL;
    this.pingMessage = options.pingMessage || DEFAULT_PING_MESSAGE
  }

  public connect(url: string) {
    this.ws.value = new WebSocket(url);
    this.ws.value.onopen = () => {
      this.heartCheck()
    }
    this.ws.value.onclose = () => {
      console.log('WebSocket closed')
      clearTimeout(this.pingTimeout);
    }
    this.ws.value.onerror = (err) => {
      console.log('WebSocket error', err)
      clearTimeout(this.pingTimeout);
    }
  }

  public close() {
    if (this.ws.value) {
      this.ws.value?.close();
    }
  }

  public send(data: string) {
    if (this.ws.value?.readyState === WebSocket.OPEN) {
      this.ws.value.send(data)
    } else {
      console.log('WebSocket not connected')
    }
  }

  public get() {
    return {
      state: this.ws.value?.readyState,
    };
  }

  private heartCheck() {
    const pingMsg: string = 'ping';
    this.pingTimeout = setInterval(() => {
      if (this.ws.value?.readyState === WebSocket.OPEN) {
        this.ws.value.send(pingMsg)
      }
    }, this.pingInterval)
  }
}
