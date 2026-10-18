import { useState } from "react"
import { toast } from "sonner"
import { Bold, Italic, Search, Plus, Loader2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/components/ui/combobox"
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"

export function ButtonDemo(){return <div className="flex max-w-xl flex-wrap items-center gap-3">{(["default","secondary","outline","ghost","destructive","link"] as const).map(variant=><Button key={variant} variant={variant} onClick={()=>toast(`Нажата кнопка ${variant}`)}>{variant}</Button>)}<Button size="sm" onClick={()=>toast("Small")}>Small</Button><Button size="lg" onClick={()=>toast("Large")}>Large</Button><Button disabled>Недоступно</Button><Button disabled><Loader2 className="animate-spin" />Загрузка</Button><Button size="icon" aria-label="Добавить" onClick={()=>toast("Элемент добавлен")}><Plus /></Button></div>}
export function ButtonGroupDemo(){const [value,setValue]=useState("День");return <ButtonGroup aria-label="Период">{["День","Неделя","Месяц"].map(v=><Button key={v} variant={value===v?"default":"outline"} onClick={()=>setValue(v)}>{v}</Button>)}</ButtonGroup>}
export function InputDemo(){return <div className="max-w-sm space-y-4"><Label htmlFor="example-input">Имя</Label><Input id="example-input" placeholder="Введите имя" /><Input disabled aria-label="Недоступное поле" placeholder="Недоступно" /><Input aria-label="Поле с ошибкой" aria-invalid placeholder="Проверьте значение" /></div>}
export function InputGroupDemo(){return <InputGroup className="max-w-sm"><InputGroupAddon><Search /></InputGroupAddon><InputGroupInput aria-label="Поиск" placeholder="Поиск по проектам…" /><InputGroupAddon align="inline-end">⌘ K</InputGroupAddon></InputGroup>}
export function InputOTPDemo(){const[value,setValue]=useState("");return <div className="space-y-3"><InputOTP aria-label="Код подтверждения" maxLength={6} value={value} onChange={setValue}><InputOTPGroup>{[0,1,2,3,4,5].map(index=><InputOTPSlot key={index} index={index} />)}</InputOTPGroup></InputOTP><p className="text-sm text-muted-foreground">Введите код из 6 цифр.</p></div>}
export function LabelDemo(){return <div className="max-w-sm space-y-2"><Label htmlFor="label-email"><Mail className="size-4" />Рабочий email</Label><Input id="label-email" type="email" placeholder="name@example.com" /></div>}
export function TextareaDemo(){return <div className="max-w-sm space-y-2"><Label htmlFor="comment">Комментарий</Label><Textarea id="comment" placeholder="Расскажите о задаче" /><Textarea disabled aria-label="Недоступный комментарий" placeholder="Недоступно" /></div>}
export function CheckboxDemo(){return <div className="space-y-4"><div className="flex items-center gap-2"><Checkbox id="terms" /><Label htmlFor="terms">Принимаю условия</Label></div><div className="flex items-center gap-2"><Checkbox id="disabled-check" disabled checked /><Label htmlFor="disabled-check">Недоступно</Label></div></div>}
export function RadioGroupDemo(){return <RadioGroup defaultValue="personal" aria-label="Тип аккаунта">{[["personal","Личный"],["team","Командный"]].map(([value,label])=><div key={value} className="flex items-center gap-2"><RadioGroupItem value={value} id={value} /><Label htmlFor={value}>{label}</Label></div>)}</RadioGroup>}
export function SwitchDemo(){const[value,setValue]=useState(true);return <div className="flex items-center gap-3"><Switch id="updates" checked={value} onCheckedChange={setValue} /><Label htmlFor="updates">Обновления {value?"включены":"выключены"}</Label></div>}
export function SliderDemo(){const[value,setValue]=useState([40]);return <div className="max-w-sm space-y-4"><Label htmlFor="volume">Громкость: {value[0]}%</Label><Slider id="volume" aria-label="Громкость" value={value} onValueChange={setValue} max={100} step={1} /><Slider disabled defaultValue={[60]} aria-label="Недоступный слайдер" /></div>}
export function CalendarDemo(){const[value,setValue]=useState<Date>();return <Calendar mode="single" selected={value} onSelect={setValue} className="w-fit rounded-lg border" />}
export function ToggleDemo(){return <Toggle aria-label="Полужирный" variant="outline"><Bold /></Toggle>}
export function ToggleGroupDemo(){return <ToggleGroup type="multiple" variant="outline" aria-label="Форматирование"><ToggleGroupItem value="bold" aria-label="Полужирный"><Bold /></ToggleGroupItem><ToggleGroupItem value="italic" aria-label="Курсив"><Italic /></ToggleGroupItem></ToggleGroup>}
export function SelectDemo(){return <Select><SelectTrigger className="w-60" aria-label="Статус проекта"><SelectValue placeholder="Выберите статус" /></SelectTrigger><SelectContent><SelectItem value="draft">Черновик</SelectItem><SelectItem value="active">В работе</SelectItem><SelectItem value="published">Опубликован</SelectItem></SelectContent></Select>}
export function NativeSelectDemo(){return <NativeSelect aria-label="Тип проекта" defaultValue=""><NativeSelectOption value="" disabled>Выберите тип</NativeSelectOption><NativeSelectOption value="site">Сайт</NativeSelectOption><NativeSelectOption value="app">Приложение</NativeSelectOption></NativeSelect>}
export function ComboboxDemo(){const items=["React","Vue","Svelte","Angular"];return <Combobox items={items}><ComboboxInput aria-label="Фреймворк" placeholder="Выберите фреймворк" showClear /><ComboboxContent><ComboboxEmpty>Ничего не найдено</ComboboxEmpty><ComboboxList>{(item:string)=><ComboboxItem key={item} value={item}>{item}</ComboboxItem>}</ComboboxList></ComboboxContent></Combobox>}
export function FieldDemo(){return <div className="max-w-sm space-y-5"><Field><FieldLabel htmlFor="field-name">Название проекта</FieldLabel><Input id="field-name" placeholder="Мой сайт" /><FieldDescription>Это название будет видно вашей команде.</FieldDescription></Field><Field data-invalid><FieldLabel htmlFor="field-error">Email</FieldLabel><Input id="field-error" aria-invalid aria-describedby="field-error-description" defaultValue="designer@" /><FieldError id="field-error-description">Укажите полный email.</FieldError></Field></div>}

