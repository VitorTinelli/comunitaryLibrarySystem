# Generated by Django 4.2.2 on 2023-06-19 18:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('biblio', '0005_alter_user_isadm'),
    ]

    operations = [
        migrations.RenameField(
            model_name='books',
            old_name='pdf',
            new_name='image',
        ),
        migrations.RemoveField(
            model_name='books',
            name='count',
        ),
        migrations.RemoveField(
            model_name='books',
            name='wiki',
        ),
    ]
