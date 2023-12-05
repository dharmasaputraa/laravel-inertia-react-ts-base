import { Separator } from '@/components/ui/separator';
import VerticalNavLink from '@/components/vertical-navlink';

export default function Menu() {
    return (
        <ul className="flex flex-col gap-y-1">
            <VerticalNavLink
                active={route().current('dashboard')}
                href={route('dashboard')}
                icon="IconDashboard"
            >
                Dashboard
            </VerticalNavLink>
            <VerticalNavLink
                active={route().current('profile.edit')}
                href={route('profile.edit')}
                icon="IconSettings"
            >
                Settings
            </VerticalNavLink>
            <Separator className="my-2" />
            <VerticalNavLink
                active={route().current('users.*')}
                href={route('users.index')}
                icon="IconUser"
            >
                Users
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon="IconPhoto">
                Gallery
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon="IconArticle">
                Articles
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon="IconCommand">
                Commands
            </VerticalNavLink>
            <Separator className="my-2" />
            <VerticalNavLink href={'#'} icon="IconBrandDiscord">
                Forum
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon="IconBrandOpenai">
                Ask AI
            </VerticalNavLink>
        </ul>
    );
}
