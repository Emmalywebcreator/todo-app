import {Checkbox} from "@/components/ui/checkbox";

interface TodoItemProps{
   id: number;
   text: string;
   completed: boolean;
   onToggle: (id: number) => void;
}

export default function TodoItem({ id, text, completed, onToggle }: TodoItemProps) {
return (
    <div className="flex items-center gap-4 p-2">
        <Checkbox checked={completed} onCheckedChange={() => onToggle(id)} />
        <span className={completed ? "line-through text-gray-500" : ""}>{text}</span>    
    </div>
)
}