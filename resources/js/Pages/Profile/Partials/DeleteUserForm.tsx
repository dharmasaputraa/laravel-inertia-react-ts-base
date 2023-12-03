import { useRef, useState, FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>

                <CardDescription>
                    Once your account is deleted, all of its resources and data will be permanently
                    deleted. Before deleting your account, please download any data or information
                    that you wish to retain.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Button variant="destructive" onClick={() => setConfirmingUserDeletion(true)}>
                    Delete Account
                </Button>
            </CardContent>

            <Dialog open={confirmingUserDeletion} onOpenChange={setConfirmingUserDeletion}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                        <DialogDescription>
                            Once your account is deleted, all of its resources and data will be
                            permanently deleted. Please enter your password to confirm you would
                            like to permanently delete your account.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={deleteUser}>
                        <div>
                            <Label htmlFor="password" className="sr-only">
                                Password
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                autoFocus
                                placeholder="Password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <DialogFooter>
                            <div className="mt-6 flex justify-end gap-x-2">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>

                                <Button variant="destructive" disabled={processing}>
                                    Delete Account
                                </Button>
                            </div>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Card>
    );
}
