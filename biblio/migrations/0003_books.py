# Generated by Django 4.2.2 on 2023-06-12 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblio', '0002_rename_nome_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Books',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('genre', models.CharField(max_length=100)),
                ('year', models.CharField(max_length=4)),
                ('edition', models.CharField(max_length=100)),
                ('pages', models.IntegerField()),
                ('language', models.CharField(max_length=100)),
                ('wiki', models.TextField()),
                ('pdf', models.TextField()),
                ('count', models.IntegerField()),
            ],
        ),
    ]
